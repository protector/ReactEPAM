import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filter from './Filter';

configure({adapter: new Adapter()});

describe('<Filter />', () => {
  let wrapper,
      filterTypes = [{title: 'title', selected: true}, {title: 'genre', selected: false}];

  beforeEach(() => {
    wrapper = shallow(<Filter filtertypes={filterTypes}/>);
  });

  it('should render p elememt in Filter', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });
  
  it('should render button elememt in Filter', () => {
    wrapper.setProps({filterTypes: filterTypes});
    expect(wrapper.find('button')).toHaveLength(2);
  });
});