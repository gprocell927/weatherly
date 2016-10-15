import React from 'react';
import Jquery from 'jquery';

const InputField = React.createClass({
  getInitialState: function () {
    return {
      location: "",
      weather: [""]
    };
  },

  getWeatherByLocation: function() {
    var thisState = this.state.location.toLowerCase();
    var spacesFree = thisState.replace(" ", '-')
    let apiUrl = 'http://weatherly-api.herokuapp.com/api/weather/' + spacesFree

    $.get(apiUrl, function(response) {
      debugger;
      this.setState({
        weather:response
      })
    }.bind(this))
  },

  handleClick: function() {
    this.getWeatherByLocation()
  },

  updateLocation: function(e) {
    this.setState({location: e.target.value})
  },

  render: function() {
    let weather;
    if (this.state.weather !== []){
      weather = this.state.weather[0]
    } else {
      weather = ""
    }

    return (
      <section className="Weather">
        <div>
          <input type="text"
                className="WeatherInput"
                value={this.state.location}
                onChange={this.updateLocation}
                />
        <input type="submit" onClick={(e) => this.handleClick(e)}/>
        </div>

        })}
        <div>
          <p>{weather.location}</p>
          <p>{weather.date}</p>
        </div>
      </section>
    );
  }
});

module.exports = InputField;
//iterate through this.state.weather objects to pull out date, location, weather

//{weather.map(dailyForecast => {
  // return

  // <WeatherDay weatherInfo=dailyForecast/>
  // <div>
  // <p> {dailyForecast.location} </p>
  // </div>
