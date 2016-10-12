console.log("HOLA MUNDO");

import React from 'react';
import Jquery from 'jquery';

//getting value from input and talking to api and then render
// $.ajax({
//   method: 'GET',
//   dataType: 'json',
//   url: 'http://weatherly-api.herokuapp.com/api/weather'
// }),

const App = React.createClass({
  getInitialState() {
    return  {
      weather: []
    }
  },
  // this code will run after the component is mounted to the DOM
  componentDidMount() {
    $.get('http://weatherly-api.herokuapp.com/api/weather', (response) => {
      this.setState({
        weather: response
      })

    })

    // 1) fetch your ajax things
    // 2) setState with the response
  },

  render() {
    console.log('rendering')
    console.log(this.state)
    // 3) render the state received from the server
    return <div></div>;
  }
});



// DONE GOAL: hello world react component
// GOAL: fetch initial weather data when page loads
//   - make the actual ajax request (what's the endpoint, what data types or options?)
//   - how to fetch data and store it as state in react
// GOAL: append weather data on page
module.exports = App
//export default Hello
