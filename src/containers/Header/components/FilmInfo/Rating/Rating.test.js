import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Rating from './Rating';

configure({adapter: new Adapter()});

describe('<Rating />', () => {
  it('should render Rating elememt in the FilmInfo', () => {
    const wrapper = shallow(<Rating />);
    expect(wrapper.contains(<div></div>)).toEqual(true);
  });
});