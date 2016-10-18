import React from 'react';
import $ from 'jquery';
import TodaysWeather from './TodaysWeather';
import SevenDayWeather from './SevenDayWeather';

const InputField = React.createClass({
  getInitialState: function () {
    return {
      location: "",
      weather: []
    }
  },

  getWeatherByLocation: function() {
    debugger;
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
          <SevenDayWeather key={weatherItem.date} weatherItem={weatherItem} />

      );
    });

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
        <div className="weatherArray">
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
