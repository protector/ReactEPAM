import React from 'react';
import classes from './Title.less';

const title = props => {
  return (
    <div className={classes.Title}>
      {props.title}
    </div>
  )
};
export default title;