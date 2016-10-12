import React from 'react';

const InputField = React.createClass({
  getInitialState: function () {
    return {
      location: ""
    };
  },

  handleClick: function() {
    this.props.handleSubmit(this.state.location)
  },

  updateLocation: function(e) {
    this.setState({location: e.target.value})
  },

  render: function() {
    return (
      <div>
        <input type="text"
              className="WeatherInput"
              value={this.state.location}
              onChange={this.updateLocation}
              />
        <input type="submit" onClick={this.handleClick}/>
      </div>
    );
  }
});

module.exports = InputField;
