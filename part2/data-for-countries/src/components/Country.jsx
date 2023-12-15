import { useState } from "react";
import CountryData from "./CountryData";

/* eslint-disable react/prop-types */
export default function Country({ country }) {
  const [showData, setShowData] = useState(false);
  return (
    <div>
      <p>
        {country.name.common}{" "}
        <button onClick={() => setShowData(!showData)}>show</button>
      </p>
      {showData ? <CountryData country={country} /> : ""}
    </div>
  );
}
