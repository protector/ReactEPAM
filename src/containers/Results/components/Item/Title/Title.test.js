import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from './Title';

configure({adapter: new Adapter()});

describe('<Title />', () => {
  it('should render Genre elememt in the Item', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.contains(<div></div>)).toEqual(true);
  });
});