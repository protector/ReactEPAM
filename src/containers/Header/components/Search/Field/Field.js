import React from 'react';
import classes from './Field.less';

const field = props => {
	return (
		<div className={classes.Field}>
			<p>{props.title}</p>
			<input type="text" placeholder={props.placeholder} />
		</div>
	)
}

export default field;