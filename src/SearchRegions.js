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
      <div>
        <h2>US State</h2>
        <select className="dropdown bg-black bn light-gray f6" onChange={getRegionData}>
        <option>Select State</option>
          {renderCountryOptions()}
        </select>
      </div>
      );
}

export default SearchRegions;