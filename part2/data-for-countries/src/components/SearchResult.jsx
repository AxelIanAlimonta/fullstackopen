/* eslint-disable react/prop-types */

import Country from "./Country";
import CountryData from "./CountryData";

export default function SearchResult({ countries }) {
  if (countries.length > 10)
    return <p>Too many matches, specify another filter.</p>;
  if (countries.length > 1)
    return (
      <div>
        {countries.map((e) => (
          <Country key={e.name.official} country={e} />
        ))}
      </div>
    );
  if (countries.length == 1) return <CountryData country={countries[0]} />;
  return <p>country not found</p>;
}
