import React from 'react';
import axios from 'axios'; // for http requests
import SearchRegions from './SearchRegions';
import SearchCounty from './SearchCounty';
import DisplayData from './DisplayData';
import TopList from './TopList';
import Chart from './components/Chart/Chart';
import './App.css';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.getRegionData = this.getRegionData.bind(this);
    this.getCountyData = this.getCountyData.bind(this);
  }

  state = {
    usaData: {},
    top10: [],
    dailyData: [],
    usaConfirmed: 0,
    usaDeaths: 0,
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    regions: [],
    usaState: 0,
    counties: [],
    countyConfirmed: 0,
    countyRecover: 0,
    countyDeaths: 0
  }

  componentDidMount() {
    this.getData();
    this.getGlobalData();
    this.getGlobalDailyData();
    this.getUSAData();

  }

  // https://covid-api.com/api/reports?&iso=USA&region_province=Texas&province_name=Cameron
// Global Total: https://covid-api.com/api/reports/total?
  async getData () {
    const resp = await fetch(`https://covid-api.com/api/reports?&iso=USA`);
    const usaData = await resp.json();
    const regions = usaData.data.map((item) => item.region.province);
    const top10 = usaData.data.map(item => ({name:item.region.province, cases: item.active, deaths: item.deaths})).sort(function(a, b){
      return b.cases - a.cases;}).slice(0,10);
    this.setState({
      regions,
      top10,
      usaData: usaData
    });
  }
  async getGlobalData () {
    const resp = await fetch("https://covid19.mathdro.id/api");
    const data = await resp.json();
    this.setState({
      globalConfirmed: data.confirmed.value,
      globalDeaths: data.deaths.value
    });
  }
  // Chart Data
  async getGlobalDailyData () {
    const resp = await fetch("https://covid19.mathdro.id/api/daily");
    const data = await resp.json();
    console.log(data);
    const dailyData = data.map(item => ({confirmed:item.confirmed, deaths: item.deaths, date: item.reportDate}));
    console.log(dailyData);
    this.setState({
      dailyData,
    });
  }
  async getUSAData () {
    const resp = await fetch("https://covid19.mathdro.id/api/countries/USA");
    const data = await resp.json();
    this.setState({
      usaConfirmed: data.confirmed.value,
      usaDeaths: data.deaths.value
    });
  }

  async getRegionData(e) {
    if (e.target.value === 'USA') {
      return this.getData();
    }
    try {
      const selected = e.target.value;
      const selectState = await axios.get(`https://covid-api.com/api/reports?&iso=USA&region_province=${selected}`);
      console.log(selectState);
      console.log(selected);
      const stateData = selectState.data.data[0];
      this.setState({
        confirmed: stateData.confirmed,
        active: stateData.active,
        deaths: stateData.deaths,
        usaState:selected,
      });

      this.getCounties();
      
    }
    catch (err) {
      if(err.response.status === 404){
      this.setState({
        confirmed: 'No Data',
        recovered: 'No Data',
        deaths: 'No Data',
      });
    }
    }   
  }

  async getCounties () {
    const resp = await fetch(`https://covid-api.com/api/reports?&iso=USA&region_province=${this.state.usaState}`);
    const stateData = await resp.json();
    const counties = stateData.data[0].region.cities.map((item) => item.name);
    this.setState({
      counties
    });
    // console.log(this.state.counties);
  }

async getCountyData(e) {
  const selectedCounty = e.target.value;
  const resp = await fetch(`https://covid-api.com/api/reports?&iso=USA&region_province=${this.state.usaState}`);
  const regions = await resp.json();
  const cities = regions.data[0].region.cities;
  
  function isCity(city) {
    return city.name === selectedCounty;
  }
  const countyData = cities.find(isCity);
  console.log(countyData);
  this.setState({
    countyConfirmed: countyData.confirmed,
    countyDeaths: countyData.deaths
  });
  console.log(`Confirmed:${this.state.countyConfirmed} Deaths: ${this.state.countyDeaths}`)
  
}

render () {
  return(
    <div className="container">
      <h1 className="bg-dark-gray white">Covid-19 Data</h1>
      <div className='flex flex-wrap'>
        <DisplayData area={'Global'} confirmed={this.state.globalConfirmed} active={this.state.active} deaths={this.state.globalDeaths}/>
        <DisplayData area={'United States'} confirmed={this.state.usaConfirmed} active={this.state.active} deaths={this.state.usaDeaths}/>
      </div>
      <Chart className='pa5' dailyData={this.state.dailyData} />
      <TopList top10={this.state.top10} />

      
      <SearchRegions regions={this.state.regions} getRegionData={this.getRegionData}/>
      <DisplayData area={this.state.usaState} confirmed={this.state.confirmed} active={this.state.active} deaths={this.state.deaths}/>
      <SearchCounty className="ml5" counties={this.state.counties} getCountyData={this.getCountyData}/>
      <DisplayData area={`County`} confirmed={this.state.countyConfirmed} active='no data' deaths={this.state.countyDeaths}/>
    </div>
    )
}
}

