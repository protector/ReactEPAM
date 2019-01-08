import React, {Component} from 'react';
import classes from './Results.less';
import Item from './components/Item/Item';

export class Results extends Component {
	render() {
		const items = this.props.itemsResult.map((item, index) => {
			return <Item  
				key={item.id}
				title={item.title}
				release={item.release}
				genre={item.genre}
				image={item.src}
			/>
		});

		let data = <h1>No films found</h1>;

		if(items.length){
			data = items;
		}

		return (
			<div className={classes.Results}>
				{data}
			</div>
		)
	}
}

export default Results;