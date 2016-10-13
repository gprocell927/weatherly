require ('./index.js');
require('./helpers/setup.js');
require('./app-test.js')
const React  = require('react')
var expect = require('chai').expect
const App = require('../app/App')
import {shallow, mount, render } from 'enzyme'
const $ = require ('jquery')


describe('input attributes', function(){
  it('should have an input field', function(){
      const wrapper = shallow (
        <App/>
      )
      expect(wrapper.contains(<InputField />).to.be.true)
  });
});
