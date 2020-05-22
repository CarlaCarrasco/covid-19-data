import React  from 'react';
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({dailyData}) => {
    console.log(dailyData);

    const lineChart = (
      dailyData.length ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => date.slice(5, 10)),
            datasets: [{
              data: dailyData.map(({ confirmed }) => confirmed.total),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            }, {
              data: dailyData.map(({deaths}) => deaths.total),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true,
            }]
          }}
        />
      ) : null
    );
  
    return (
      <div className='center mv3' style={{height:'auto', width:'60vw'}}>
        {/* <h1>Line Chart Goes Here...</h1> */}
        {lineChart}
      </div>
    );
  }
  
  export default Chart;