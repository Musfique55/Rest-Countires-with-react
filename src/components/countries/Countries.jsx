import { useEffect, useState } from "react";
import Country from "../Country";
import './Country.css'
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry,setVisitedCountry] = useState([]);
//   const [flags,setFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisited = (country) => {
    // console.log('add this');
    // console.log(country);
    const newVisited = [...visitedCountry,country];
    setVisitedCountry(newVisited);
  }
   
  return (
    <div>
      <p>Countries: {countries.length}</p>
      {/*display country name */}
      <div>
        <h5>visited: {visitedCountry.length}</h5>
        <ul>
            {
                visitedCountry.map(country => {
                    console.log(country)
                   return (
                   <li key={country.cca2}><img src={country.flags.svg} className="visited-flags"/>{country.name.common} </li>
                   )
                })
            }
        </ul>
      </div>
      <div  className="countries-container">
      {
        countries.map(country => <Country key={country.cca3} country={country} handleVisited={handleVisited}>
        </Country>
        )
      }
      </div>
    </div>
  );
};

export default Countries;
