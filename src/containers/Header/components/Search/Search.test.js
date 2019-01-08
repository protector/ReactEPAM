import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';
import Field from './Field/Field';
import Button from './Button/Button';
import Filter from './Filter/Filter';

configure({adapter: new Adapter()});

describe('<Search />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('should render <Field /> elememt in Search', () => {
    expect(wrapper.find(Field)).toHaveLength(1);
  });
  
  it('should render <Button /> elememt in Search', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
  
  it('should render <Filter /> elememt in Search', () => {
    expect(wrapper.find(Filter)).toHaveLength(1);
  });
    
});