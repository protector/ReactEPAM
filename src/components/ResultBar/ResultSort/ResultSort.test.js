import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultSort from './ResultSort';

configure({adapter: new Adapter()});
let sortTypes = [{title: 'release date', selected: false}, {title: 'rating', selected: true}];

describe('<ResultSort />', () => {
  it('should render p elememt in ResultBar', () => {
    const wrapper = shallow(<ResultSort sorttypes={sortTypes}/>);
    wrapper.setProps({sorttypes: sortTypes});
    expect(wrapper.find('p')).toHaveLength(3);
  });
});