import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultGenre from './ResultGenre';

configure({adapter: new Adapter()});

describe('<ResultGenre />', () => {
  it('should render p elememt in ResultBar', () => {
    const wrapper = shallow(<ResultGenre />);
    expect(wrapper.find('p')).toHaveLength(1);
  });
});