import React from 'react';
import classes from './Image.less';

const image = props => {
  return (
    <div className={classes.Image}>
      <img src={props.image}/>
    </div>
  )
};
export default image;