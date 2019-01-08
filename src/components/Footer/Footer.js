import React from 'react';
import classes from './Footer.less';
import Logo from '../Logo/Logo';

const footer = props => {
  return (
		<div className={classes.Footer}>
      	<Logo page='info' />
		</div>
	)
};

export default footer;