require('./main');

function getWeather() {
  $.get('http://weatherly-api.herokuapp.com/api/weather', function(response) {
    debugger;
    var weather = JSON.parse(response);
    appendWeather();
  })
}

 $('.btn-input').on('click', function(){
  getWeather();
});

function appendWeather(weather) {
  $('.weather-display').append(`<p> ${ weather }</p>`);
};
