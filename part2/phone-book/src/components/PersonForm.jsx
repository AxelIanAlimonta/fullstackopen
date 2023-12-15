/* eslint-disable react/prop-types */
import { useState } from "react";
import { addPerson, updatePerson } from "../services/personsServer";

export default function PersonForm({
  persons,
  setPersons,
  setMsg,
  setMsgType,
}) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  function handleInputNameChange(e) {
    setNewName(e.target.value);
  }

  function handleInputNumberChange(e) {
    setNewNumber(e.target.value);
  }

  function personExists(personName) {
    for (let i = 0; i < persons.length; i++) {
      if (personName === persons[i].name) {
        return true;
      }
    }
    return false;
  }

  function searchPersonId(personName) {
    for (let i = 0; i < persons.length; i++) {
      if (personName === persons[i].name) {
        return persons[i].id;
      }
    }
    return undefined;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (personExists(newName)) {
      const response = confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (response) {
        let personId = searchPersonId(newName);
        let newData = {
          id: personId,
          name: newName,
          number: newNumber,
        };
        updatePerson(personId, newData).catch((err) => {
          console.log(err);
          setMsgType("err");
          setMsg(`Information of ${newName} has already been removed from server`);
          setTimeout(() => {
            setMsgType(null);
            setMsg(null);
          }, 3000);
        });
        setPersons(
          persons.map((e) => {
            if (e.id == personId) {
              return newData;
            } else return e;
          })
        );
      }
      return;
    }
    addPerson({ name: newName, number: newNumber }).then((res) => {
      setPersons([...persons, res]);
      setNewName("");
      setNewNumber("");
      setMsgType("added");
      setMsg(`added ${newName}`);
      setTimeout(() => {
        setMsg(null);
      }, 3000);
    });
  }

  return (
    <>
      <h2>Add a new</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputNameChange} />
        </div>
        <div>
          number:{" "}
          <input
            type="number"
            value={newNumber}
            onChange={handleInputNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}
