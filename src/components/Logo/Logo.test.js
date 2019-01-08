import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logo from './Logo';

configure({adapter: new Adapter()});

describe('<Logo />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('should render p elememt', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });
  
  it('should render p elememt with joined classes', () => {
    wrapper.setProps({page: 'info'});
    expect(wrapper.contains(<p className=' '>netflixroulette</p>)).toEqual(true);
  });
});