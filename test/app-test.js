var expect  = require('chai').expect
const React = require('react')
const App   = require('../app/App')
const LikesCounter = require('../app/InputField')

import { shallow, mount, render } from 'enzyme'

describe('app.jsx renders the likes counter', function(){
  it('should render the application', function(){
    const wrapper = shallow(<App/>)

    expect(wrapper.contains(<InputField/>)).to.be.true
  })

  it('should have the button text rendered onto the page', function(){
    const wrapper = render(<App/>)
    expect(wrapper.text()).to.contain('Submit')
  })
}
