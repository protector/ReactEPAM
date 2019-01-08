import React from 'react';
import classes from './Filter.less';

const filter = props => {
	const buttons = props.filtertypes.map((filter, index) => {
		let btnClass = classes.button;
		if(filter.selected){
			btnClass = [classes.button, classes.selected].join(' ');
		}
		return <button className={btnClass} selected={filter.selected} onClick={props.click} key={index}>{filter.title}</button>
	});

	return (
		<div className={classes.Filter}>
			<p>{props.title}</p>
			{buttons}
		</div>
	) 
}

export default filter;