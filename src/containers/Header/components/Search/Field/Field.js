import React from 'react';
import classes from './Field.less';
import Error from '../../../../../components/ErrorBoundry/ErrorBoundry';

const field = (props) => {
	return (
		<div className={classes.Field}>
			<p>{props.title}</p>
			<input type="text" placeholder={props.placeholder} />
			<Error />
		</div>
	)
}

export default field;