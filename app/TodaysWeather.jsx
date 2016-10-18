import React, { PropTypes } from 'react';

const TodaysWeather = (props) => {
  const { weatherItem } = props;
  return (
    <div key={weatherItem.date} id='weatherToday'>
      <section  className='todaysWeather'>
        <h2>Today is: {weatherItem.date}</h2>
        <h3> Your forecast for {(weatherItem.location).replace("-", " ").toUpperCase()} is:</h3>
        <p>{weatherItem.weatherType.type}</p>
        <p>{weatherItem.temp.high}&deg;</p>
        <p>{weatherItem.temp.low}&deg;</p>
      </section>
      <div id='weatherGif'className={weatherItem.weatherType.type}></div>
    </div>
  );
};

TodaysWeather.propTypes = {
  weatherItem: PropTypes.object.isRequired


}





module.exports = TodaysWeather;
// {/* <p>{weather || 'xx'}</p> */}
// // const weather = props.weather;
