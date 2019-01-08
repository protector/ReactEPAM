import React from 'react';
import classes from './Title.less';

const title = (props) => {
  return (
    <div className={classes.Title}>
      <span>{props.title}</span>
      <span>{props.subtitle}</span>
    </div>
  )
};
export default title;