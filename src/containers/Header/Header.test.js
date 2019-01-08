import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Header} from './Header';
import Logo from '../../components/Logo/Logo';
import FilmInfo from './components/FilmInfo/FilmInfo';
import Search from './components/Search/Search';

configure({adapter: new Adapter()});

describe('<Header />', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Header/>);
  });

  it('should render <Logo /> in the Header', () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  });
  
  it('should render <FilmInfo /> in the Header', () => {
    expect(wrapper.find(FilmInfo)).toHaveLength(1);
  });
  
  /*it('should render <Search /> in the Header', () => {
    expect(wrapper.find(Search)).toHaveLength(1);
  });*/
});