import React from 'react';
import ReactDOM from 'react-dom';
import Jquery from 'jquery';
import InputField from './Inputfield';

//getting value from input and talking to api and then render
// $.ajax({
//   method: 'GET',
//   dataType: 'json',
//   url: 'http://weatherly-api.herokuapp.com/api/weather'
// }),

const App = React.createClass({
  getInitialState() {
    return  {
      weather: [],
      location: ''
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

  setLocation: function(location) {

  },

  render: function() {
    return(
      <div>
        <InputField />
      </div>
    )
    // 3) render the state received from the server
    // return <div></div>;
  }
});

// class InputField extends React.Component {
//   render() {
//     return (
//       // <input type="text" value = {this.state.value} className="WeatherInput" />
//       <h1>HELLO</h1>;
//     );
//   }
// };

ReactDOM.render(
  <App />,
  document.getElementById('react-root')
);
