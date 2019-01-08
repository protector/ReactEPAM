import React from 'react';
import classes from './Rating.less';

const rating = (props) => <div className={classes.Rating}>{props.value}</div>;

export default rating;