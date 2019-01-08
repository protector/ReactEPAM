import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Field from './Field';

configure({adapter: new Adapter()});

describe('<Field />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Field />);
  });

  it('should render p elememt in Search', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });
  
  it('should render input elememt in Search', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });
    
});