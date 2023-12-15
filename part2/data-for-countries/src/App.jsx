import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import SearchResult from "./components/SearchResult";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const api_key = import.meta.env.VITE_REACT_APP_API_KEY;
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries([...res.data]);
    });

    // axios
    //   .get("http://api.weatherstack.com/current", {
    //     params: { access_key: api_key, query: "New York" },
    //   })
    //   .then((res) => console.log("res", res));
  }, [api_key]);

  let filteredData = countries.filter((e) => {
    return e.name.common.toUpperCase().includes(filter.toUpperCase());
  });

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <SearchResult countries={filteredData} />
      {/* {countries.map((e) => (
        <p key={e.name.official}>{e.name.common}</p>
      ))} */}
    </>
  );
}

export default App;
