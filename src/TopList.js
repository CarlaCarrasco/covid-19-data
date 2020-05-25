import React from 'react';
// import axios from 'axios'; // for http requests

import './App.css';

const TopList = ({top10}) => {
   
    function renderTop10 () { 
        return top10.map((item) => 
        <tr className="bb" key={item.name.toString()}>
            <td className="pv2 ph3">{item.name}</td>
            <td className="pv2 ph3">{item.cases}</td>
            <td className="pv2 ph3">{item.deaths}</td>
        </tr>
      );
       
    }
    renderTop10();

    return(
        <div className='top-list mb4'>
            <h2 className='mb3'>Top 10</h2>         
            <table className="collapse ba br2 b--black-10 pv2 ph3 bg-light-gray gray tl center">
                <tbody>
                    <tr className="bb bg-gray light-gray">
                        <th className="pv2 ph3 tl f6 fw6 ttu">U.S. State</th>
                        <th className="tr f6 ttu fw6 pv2 ph3">Cases</th>
                        <th className="tr f6 ttu fw6 pv2 ph3">Deaths</th>
                    </tr>
                    {renderTop10()}
                </tbody>
            </table>
        </div>
      )
}

export default TopList;