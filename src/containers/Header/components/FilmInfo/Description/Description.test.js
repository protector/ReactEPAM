import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Description from './Description';

configure({adapter: new Adapter()});

describe('<Description />', () => {
  it('should render Description elememt in the FilmInfo', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.find('p')).toHaveLength(1);
  });
});