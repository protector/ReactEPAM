import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Release from './Release';

configure({adapter: new Adapter()});

describe('<Release />', () => {
  it('should render Release elememt in the Item', () => {
    const wrapper = shallow(<Release />);
    expect(wrapper.contains(<div></div>)).toEqual(true);
  });
});