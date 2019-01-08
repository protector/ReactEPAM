import React from 'react';
import classes from './ResultCounter.less';

const resultcounter = (props) => {
  return (
    <div className={classes.ResultCounter}>
      <p>{props.value} {props.text}</p>
    </div>
  )
};
export default resultcounter;