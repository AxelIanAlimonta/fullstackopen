/* eslint-disable react/prop-types */

export default function CountryData({ country }) {
  // const api_key = process.env.REACT_API_KEY
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>{country.capital}</p>
      <p>populaton {country.population}</p>
      <h3>languages</h3>
      <ul>
        {Object.values(country.languages).map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="flag" />
      <h3>Weather in {country.name.common}</h3>
    </div>
  );
}
