import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';
import Logo from '../Logo/Logo';

configure({adapter: new Adapter()});

describe('<Footer />', () => {
  it('should render Logo elememt in the Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(Logo)).toHaveLength(1);
  });
});