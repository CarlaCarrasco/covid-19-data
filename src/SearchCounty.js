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
      <div>
        <h2>US County</h2>
        <select className="dropdown bg-black bn light-gray f6" onChange={getCountyData}>
            <option>Select County</option>
            {renderCountryOptions()}
          </select>
      </div>
       
      )

}

export default SearchCounty;