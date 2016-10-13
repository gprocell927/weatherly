import React from 'react';
import Jquery from 'jquery';

const InputField = React.createClass({
  getInitialState: function () {
    return {
      location: "",
      weather: []
    };
  },

  getWeatherByLocation: function() {
    var thisState = this.state.location
    var spacesFree = thisState.replace(" ", '-')

    $.get('http://weatherly-api.herokuapp.com/api/weather/' + spacesFree, (response) => {
      this.setState({
        weather:response
      })
    })
  },

  handleClick: function() {
    this.getWeatherByLocation()
  },

  updateLocation: function(e) {
    this.setState({location: e.target.value})
  },

  render: function() {
    return (
      <div>
        <input type="text"
              className="WeatherInput"
              value={this.state.location}
              onChange={this.updateLocation}
              />
        <input type="submit" onClick={this.handleClick}/>
      </div>
    );
  }
});

module.exports = InputField;
