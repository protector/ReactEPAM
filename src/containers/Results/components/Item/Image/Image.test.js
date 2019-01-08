import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from './Image';

configure({adapter: new Adapter()});

describe('<Image />', () => {
  it('should render Image elememt in the Item', () => {
    const wrapper = shallow(<Image />);
    expect(wrapper.find('img')).toHaveLength(1);
  });
});