import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultBar from './ResultBar';
import ResultCounter from './ResultCounter/ResultCounter';
import ResultSort from './ResultSort/ResultSort';
import ResultGenre from './ResultGenre/ResultGenre';

configure({adapter: new Adapter()});

describe('<ResultBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultBar />);
  });

  it('should render <ResultCounter /> elememt in ResultBar', () => {
    expect(wrapper.find(ResultCounter)).toHaveLength(1);
  });
  
  it('should render <ResultSort /> elememt in ResultBar', () => {
    expect(wrapper.find(ResultSort)).toHaveLength(1);
  });
  
  /*it('should render <ResultGenre /> elememt in ResultBar', () => {
    expect(wrapper.find(ResultGenre)).toHaveLength(1);
  });*/
    
});