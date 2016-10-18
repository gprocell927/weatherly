import React from 'react';
import $ from 'jquery';
import TodaysWeather from './TodaysWeather'

const InputField = React.createClass({
  getInitialState: function () {
    return {
      location: "",
      weather: []
      }
  },

  getWeatherByLocation: function() {
    var thisState = this.state.location.toLowerCase();
    var spacesFree = thisState.replace(" ", '-');
    let apiUrl = 'http://weatherly-api.herokuapp.com/api/weather/' + spacesFree
    $.get(apiUrl, function(response) {
      this.setState({
        weather:response
      })
      var stringifiedWeather = JSON.stringify(this.state)
      localStorage.setItem('weather', stringifiedWeather)
    }.bind(this));
  },


  handleClick: function() {
    this.getWeatherByLocation();
  },

  updateLocation: function(e) {
    this.setState({location: e.target.value})
  },


  render: function() {
    let weather = this.state.weather;
    let  weatherArray = weather.map((weatherItem, i) => {
      if (i === 0) {
        return (
          <TodaysWeather key={weatherItem.date} weatherItem={weatherItem} />
        );
      }

      return (
        <article key={weatherItem.date} className='tomorrowsWeather'>
          <p>{weatherItem.weatherType.type}</p>
          <p>{weatherItem.temp.high}&deg;</p>
          <p>{weatherItem.temp.low}&deg;</p>
        </article>
      );
    });

    // let locationWarning ;
    // if (this.state.weather.length === 0) {
    //   locationWarning = <div>Please ænter a valid löcation</div>;
    // } else {
    //   locationWarning = ''
    // }
    let locationWarning;
    this.state.weather.length === 0 ? locationWarning = 'Please ænter a valid löcation' : ''
    return (
      <section className="Weather">
        <div className='weatherInput'>
          <input placeholder="Enter location" type="text"
                className="WeatherInput"
                value={this.state.location}
                onChange={this.updateLocation}
                />
        <input type="submit" className="submitButton" onClick={(e) => this.handleClick(e)}/>
        </div>
        <div className="locationWarning">{locationWarning}</div>
        <div>
          {weatherArray}
        </div>
      </section>
    );

  },

  componentDidMount: function() {
    let weatherFromLocal = JSON.parse(localStorage.getItem('weather'))
      if (weatherFromLocal !== []) {
        this.setState({location: weatherFromLocal.location, weather: weatherFromLocal.weather})
      }
  }
});

module.exports = InputField;
//iterate through this.state.weather objects to pull out date, location, weather
// {/* else if (index !== 0){
//   return
//   <article key={dailyForecast.date}>
//   <p>{dailyForecast.weatherType.type}</p>
//   <p>{dailyForecast.temp.high}</p>
//   <p>{dailyForecast.temp.low}</p>
//   </article>
// } */}
// {/* // return <li key={dailyForecast.date}>{dailyForecast.location} {dailyForecast.date} <br></br> {dailyForecast.weatherType.type}</li> */}
