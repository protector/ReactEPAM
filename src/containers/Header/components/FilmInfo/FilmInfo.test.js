import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmInfo from './FilmInfo';
import Button from './Button/Button';
import Cover from './Cover/Cover';
import Title from './Title/Title';
import Rating from './Rating/Rating';
import Stats from './Stats/Stats';
import Description from './Description/Description';

configure({adapter: new Adapter()});

describe('<FilmInfo />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FilmInfo />);
  });

  it('should render <Button /> elememt', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
  
  it('should render <Cover /> elememt', () => {
    expect(wrapper.find(Cover)).toHaveLength(1);
  });
  
  it('should render <Title /> elememt', () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });
  
  it('should render <Rating /> elememt', () => {
    expect(wrapper.find(Rating)).toHaveLength(1);
  });
  
  it('should render <Stats /> elememt', () => {
    expect(wrapper.find(Stats)).toHaveLength(1);
  });
  
  it('should render <Description /> elememt', () => {
    expect(wrapper.find(Description)).toHaveLength(1);
  });
  
  
});