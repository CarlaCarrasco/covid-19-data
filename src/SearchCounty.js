import React from 'react';
// import axios from 'axios'; // for http requests

import './App.css';

const SearchCounty = ({counties, getCountyData}) => {


    function renderCountryOptions () { 
        return counties.map((usaState, i) => {
          return <option key={i}>{usaState}</option>
        });
    
      }

    return(
        <select className="dropdown bg-black bn light-gray" onChange={getCountyData}>
          <option>Select County</option>
          {renderCountryOptions()}
        </select>
      )

}

export default SearchCounty;