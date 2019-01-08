import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cover from './Cover';

configure({adapter: new Adapter()});

describe('<Cover />', () => {
  it('should render Cover elememt in the FilmInfo', () => {
    const wrapper = shallow(<Cover />);
    expect(wrapper.find('img')).toHaveLength(1);
  });
});