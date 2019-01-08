import React, {Component} from 'react';
import classes from './Results.less';
import Item from './components/Item/Item';

class Results extends Component {
	render() {
		const itemsResult = [
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
			},
			{
				src: '/src/assets/item-detailed.jpg',
				genre: 'Comedies',
				release: 1995,
				title: 'Four Rooms',
				id:'dfg'
			},
			{
				src: '/src/assets/item-detailed.jpg',
				genre: 'Drama',
				release: 2012,
				title: 'Django Unchained',
				id:'fgh'
			},
			{
				src: '/src/assets/item-detailed.jpg',
				genre: 'Action & Adventure',
				release: 2004,
				title: 'Kill Bill: Vol. 2',
				id:'ghj'
			}
		];

		const items = itemsResult.map((item, index) => {
			return <Item  
				key={item.id}
				title={item.title}
				release={item.release}
				genre={item.genre}
				image={item.src}
			/>
		});

		return (
			<div className={classes.Results}>
				{items}
			</div>
		)
	}
}

export default Results;