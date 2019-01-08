import React from 'react';
import classes from './Release.less';

const release = props => {
  return (
    <div className={classes.Release}>
      {props.release}
    </div>
  )
};
export default release;