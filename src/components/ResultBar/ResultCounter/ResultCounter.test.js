import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultCounter from './ResultCounter';

configure({adapter: new Adapter()});

describe('<ResultCounter />', () => {
  it('should render p elememt in ResultBar', () => {
    const wrapper = shallow(<ResultCounter />);
    expect(wrapper.find('p')).toHaveLength(1);
  });
});