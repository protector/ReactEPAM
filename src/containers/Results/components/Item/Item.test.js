import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Item from './Item';
import Image from './Image/Image';
import Release from './Release/Release';
import Title from './Title/Title';
import Genre from './Genre/Genre';

configure({adapter: new Adapter()});

describe('<Item />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Item />);
  });

  it('should render <Image /> elememt', () => {
    expect(wrapper.find(Image)).toHaveLength(1);
  });
  
  it('should render <Release /> elememt', () => {
    expect(wrapper.find(Release)).toHaveLength(1);
  });
  
  it('should render <Title /> elememt', () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });
  
  it('should render <Genre /> elememt', () => {
    expect(wrapper.find(Genre)).toHaveLength(1);
  });
});