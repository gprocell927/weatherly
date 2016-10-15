import React from 'react'

const WeatherData = (props) => {
  const weather = props.weather;
    return (
      <div className="WeatherData">
        <p>Weather: </p>
        <p>{weather || 'xx'}</p>
      </div>
    );
};

module.exports = WeatherData
