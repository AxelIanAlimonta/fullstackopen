/* eslint-disable react/prop-types */
import { deletePerson } from "../services/personsServer";

export default function Persons({
  filteredPersons,
  persons,
  setPersons,
  setMsg,
  setMsgType,
}) {
  function handleDeletePerson(id, name) {
    deletePerson(id)
      .then(() => {
        let cpy = [...persons];

        setPersons(cpy.filter((e) => e.id != id));
      })
      .catch((err) => {
        console.log(err);
        setMsgType("err");
        setMsg(`Information of ${name} has already been removed from server`);
        setTimeout(() => {
          setMsgType(null)
          setMsg(null)
        }, 3000);
      });
  }

  return (
    <div>
      <h2>Numbers</h2>
      {filteredPersons.map((p) => (
        <p key={p.id}>
          {p.name} {p.number}{" "}
          <button onClick={() => handleDeletePerson(p.id, p.name)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}
