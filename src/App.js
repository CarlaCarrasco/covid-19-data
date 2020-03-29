import React from 'react';
import axios from 'axios'; // for http requests
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.getCountryData = this.getCountryData.bind(this);
  }

  state = {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    countries: []
  }
  componentDidMount() {
    this.getData();
  }

  async getData () {
    const resAPI = await axios.get("https://covid19.mathdro.id/api");
    const resCountries = await axios.get("https://covid19.mathdro.id/api/countries");
    let countries = resCountries.data.countries.map((item) => item.name); 
    this.setState({
      confirmed: resAPI.data.confirmed.value,
      recovered: resAPI.data.recovered.value,
      deaths: resAPI.data.deaths.value,
      countries
    });
  }

  async getCountryData(e) {
    if (e.target.value === 'Worldwide') {
      return this.getData();
    }
    try {
      const resCountry = await axios.get(`https://covid19.mathdro.id/api/countries/${e.target.value}`);
    this.setState({
      confirmed: resCountry.data.confirmed.value,
      recovered: resCountry.data.recovered.value,
      deaths: resCountry.data.deaths.value,
    });
      
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

  renderCountryOptions () {
    return this.state.countries.map((country, i) => {
      return <option key={i}>{country}</option>
    });

  }
  render () {
    return(
      <div className="container">
        <h1>Covid-19 Update</h1>
        <select className="dropdown" onChange={this.getCountryData}>
        <option>Worldwide</option>
          {this.renderCountryOptions()}
        </select>
        <div className="flex">
          <div className="box confirmed">
            <h3>Confirmed Cases</h3>
            <h4>{this.state.confirmed}</h4>
          </div>
          <div className="box recovered">
            <h3>Confirmed Recovered</h3>
            <h4>{this.state.recovered}</h4>
          </div>
          <div className="box deaths">
            <h3>Confirmed Deaths</h3>
            <h4>{this.state.deaths}</h4>
          </div>
        </div>
      </div>
      )
}
}

