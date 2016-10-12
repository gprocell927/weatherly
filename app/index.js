require('./main');
const $ = require('jquery')

function getWeather() {
  $.get('http://weatherly-api.herokuapp.com/api/weather', function(response) {
    var weather = response;
    appendWeather();
  })
}

 $('.btn-input').on('click', function(){
  getWeather();
});

function appendWeather(weather) {
  $('.weather-display').append(`<p> ${ weather }</p>`);
};
