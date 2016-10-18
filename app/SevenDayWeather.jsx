import React, { PropTypes } from 'react';

const SevenDayWeather = (props) => {
  const { weatherItem } = props;
    return (
      <article key={weatherItem.date} className='tomorrowsWeather'>
        <p>{weatherItem.weatherType.type}</p>
        <p>{weatherItem.temp.high}&deg;</p>
        <p>{weatherItem.temp.low}&deg;</p>
      </article>
    );
};

module.exports = SevenDayWeather
