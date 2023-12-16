import { useEffect, useState } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import { getAll } from "./services/personsServer";
import Message from "./components/Message";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [msg, setMsg] = useState(null);
  const [msgType, setMsgType] = useState(null);

  const [filter, setFilter] = useState("");
  let filteredPersons = persons.filter((p) => {
    return p.name.toUpperCase().includes(filter.toLocaleUpperCase());
  });

  useEffect(() => {
    getAll()
      .then((data) => setPersons([...data]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Message msg={msg} type={msgType} />
      <Filter setFilter={setFilter} filter={filter} />
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setMsg={setMsg}
        setMsgType={setMsgType}
      />
      <Persons
        filteredPersons={filteredPersons}
        persons={persons}
        setPersons={setPersons}
        setMsg={setMsg}
        setMsgType={setMsgType}
      />
    </div>
  );
};

export default App;
