import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from './Title';

configure({adapter: new Adapter()});

describe('<Title />', () => {
  it('should render Title elememt in the FilmInfo', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.find('span')).toHaveLength(2);
  });
});