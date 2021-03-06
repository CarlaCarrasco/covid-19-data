import React from 'react';
// import axios from 'axios'; // for http requests

import './App.css';

export default function DisplayData(props){

  // https://covid-api.com/api/reports?&iso=USA&region_province=Texas&province_name=Cameron

    return(
      <div className="display-data">
        <h2>{props.area ? props.area : ''}</h2>
          <div className="flex justify-around">
            <article className="w-50 mr3 mw5 mw6-ns br4 hidden ba b--white-10 mv4">
              <h3 className="f4 bg-dark-gray br3 br--top black-60 mv0 pv2 ph3 orange">Confirmed <div>Cases</div></h3>
              <div className="pa3 pa4-ns bt b--black-10"> 
                <h2 className="f3 lh-copy measure orange">
                  {props.confirmed ? props.confirmed.toLocaleString() : '-'}
                </h2>
              </div>
            </article>
            <article className="w-50 center mh0-ns mr3 mw5 mw6-ns br4 hidden ba b--white-10 mv4">
              <h3 className="f4 bg-dark-gray br3 br--top black-60 mv0 pv2 ph3 dark-red">Confirmed Deaths</h3>
              <div className="pa3 pa4-ns bt b--black-10">
                <h2 className="f3 lh-copy measure dark-red">
                  {props.deaths ? props.deaths.toLocaleString() : '-'}
                </h2>
              </div>
            </article>
        </div> 
      </div>
      )

}

