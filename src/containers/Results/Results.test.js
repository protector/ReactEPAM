import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Results} from './Results';
import Item from './components/Item/Item';

configure({adapter: new Adapter()});

describe('<Results />', () => {
  let wrapper,
      itemsResult = [
        {
          src: '/src/assets/item-detailed.jpg',
          genre: 'Drama',
          release: 1997,
          title: 'Jackie Brown',
          id:'asd'
        },
        {
          src: '/src/assets/item-detailed.jpg',
          genre: 'Independent Movies',
          release: 1992,
          title: 'Reservoir Dogs',
          id:'sdf'
        }
      ];
  
  beforeEach(() => {
    wrapper = shallow(<Results itemsResult={itemsResult}/>);
  });

  it('should render <Item /> when receiving items', () => {
    expect(wrapper.find(Item)).toHaveLength(2);
  });
  
  it('should render h1 when not receiving items', () => {
    itemsResult = []
    wrapper.setProps({itemsResult: itemsResult});
    expect(wrapper.contains(<h1>No films found</h1>)).toEqual(true);
  });
});