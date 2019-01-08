import React from 'react';
import classes from './Button.less';

const button = (props) => <button className={classes.Button} onClick={props.click}>{props.title}</button>;
export default button;