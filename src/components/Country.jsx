import { useState } from 'react';
import './countries/Country.css'
const Country = ({country,handleVisited}) => {
    const {name,flags,population,area,cca2} = country;

    const [visited,setVisited] = useState(false);

    const handleClick = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country-container ${visited ? 'visited' : 'non-visited'}`}>
            <img src={flags.svg} className='flags'/>
            <p>Name: {name?.common}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca2}</p>
            <button onClick={()=> {handleClick();handleVisited(country);}}>{visited?'Visited':'Going'}</button>
            <br />
            {visited ? 'I have visited' : 'Not visited yet'}
        </div>
    );
};

export default Country;