import React from 'react';
// import axios from 'axios'; // for http requests

import './App.css';

const SearchRegions = ({regions, getRegionData}) => {


    function renderCountryOptions () { 
        return regions.map((usaState, i) => {
          return <option key={i}>{usaState}</option>
        });
    
      }

    return(
        <select className="dropdown bg-black bn light-gray" onChange={getRegionData}>
        <option>Select State</option>
          {renderCountryOptions()}
        </select>
      )

}

export default SearchRegions;