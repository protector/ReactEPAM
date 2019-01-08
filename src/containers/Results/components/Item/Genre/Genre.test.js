import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Genre from './Genre';

configure({adapter: new Adapter()});

describe('<Genre />', () => {
  it('should render Genre elememt in the Item', () => {
    const wrapper = shallow(<Genre />);
    expect(wrapper.contains(<div></div>)).toEqual(true);
  });
});