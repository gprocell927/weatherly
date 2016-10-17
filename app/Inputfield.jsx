import React from 'react';
import Jquery from 'jquery';

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
    let weatherArray = [];
    for (var i = 0; i < weather.length; i++){
      if (i=== 0) {
      weatherArray.push( <article key={weather[i].date}>
        <h3>Today is: {weather[i].date}</h3>
        <h3> Your forecast for {weather[i].location} is:</h3>
        <p>{weather[i].weatherType.type}</p>
        <p>{weather[i].temp.high}</p>
        <p>{weather[i].temp.low}</p>
      </article>)
    } else {
          weatherArray.push
(          <article key={weather[i].date}>
            <p>{weather[i].weatherType.type}</p>
            <p>{weather[i].temp.high}</p>
            <p>{weather[i].temp.low}</p>
          </article>
)        }
      }
      let locationWarning ;
      if (this.state.weather.length === 0) {
        locationWarning = <div>That isn't valid</div>;
      } else {
        locationWarning = ''
      }


    return (
      <section className="Weather">
        <div>
          <input placeholder="Enter location" type="text"
                className="WeatherInput"
                value={this.state.location}
                onChange={this.updateLocation}
                />
        <input type="submit" onClick={(e) => this.handleClick(e)}/>
        </div>
        <div className="locationWarning">{locationWarning}
        </div>
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
{/* else if (index !== 0){
  return
  <article key={dailyForecast.date}>
  <p>{dailyForecast.weatherType.type}</p>
  <p>{dailyForecast.temp.high}</p>
  <p>{dailyForecast.temp.low}</p>
  </article>
} */}
{/* // return <li key={dailyForecast.date}>{dailyForecast.location} {dailyForecast.date} <br></br> {dailyForecast.weatherType.type}</li> */}
