import React, { PropTypes } from 'react';

const SevenDayWeather = (props) => {
  const { weatherItem } = props;
    return (
      <section key={weatherItem.date} className= 'tomorrowsWeather'>
        <p>{weatherItem.date}</p>
        <p className={weatherItem.weatherType.type + 'lol'}>{weatherItem.weatherType.type}</p>
        <p>{weatherItem.temp.high}&deg;</p>
        <p>{weatherItem.temp.low}&deg;</p>
      </section>
    );
};

module.exports = SevenDayWeather
