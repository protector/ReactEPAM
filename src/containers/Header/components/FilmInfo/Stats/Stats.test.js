import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Stats from './Stats';

configure({adapter: new Adapter()});

describe('<Stats />', () => {
  it('should render Stats elememt in the FilmInfo', () => {
    const wrapper = shallow(<Stats />);
    expect(wrapper.find('span')).toHaveLength(2);
  });
});