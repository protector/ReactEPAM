import React from 'react';
import classes from './Stats.less';

const stats = props => {
  return (
    <div className={classes.Stats}>
      <span>{props.year}</span>
      <span>{props.duration}</span>
    </div>
  )
};
export default stats;