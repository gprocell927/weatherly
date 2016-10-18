import React from 'react';
import ReactDOM from 'react-dom';
import Jquery from 'jquery';
import InputField from './Inputfield';
const $ = require('jquery');


const App = React.createClass({
  getInitialState() {
    return  {
      weather: [],
      location: ''
    }
  },


  setLocation: function(location) {

  },

  render: function() {
    return(
      <div>
        <InputField />
      </div>
    )

  }
});


ReactDOM.render(
  <App />,
  document.getElementById('react-root')
);
