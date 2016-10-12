import ReactDOM from 'react-dom'
import React from 'react';
import App from './App';

// import $ from 'jquery';

ReactDOM.render(
  <App />,
  document.getElementById('react-root')
);

//REACT DOM in HERE
// function getWeather() {
//   $.get('http://weatherly-api.herokuapp.com/api/weather', function(response) {
//     const weather = response;
//     appendWeather();
//   })
// }
//
//  $('.btn-input').on('click', function() {
//   getWeather();
// });
//
// function appendWeather(weather) {
//   $('.weather-display').append(`<p> ${ weather }</p>`);
// };
