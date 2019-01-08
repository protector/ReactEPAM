import React from 'react';
import classes from './ResultSort.less';

const resultsort = props => {
	const sortby = props.sorttypes.map((sort, index) => {
		let sortbyClass = classes.sortby;
		if(sort.selected){
			sortbyClass = [classes.sortby, classes.selected].join(' ');
		}
		return <p className={sortbyClass} selected={sort.selected} onClick={props.click} key={index}>{sort.title}</p>
	});

	return (
		<div className={classes.ResultSort}>
			<p>{props.title}</p>
			{sortby}
		</div>
	) 
}

export default resultsort;