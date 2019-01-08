import React from 'react';
import classes from './Genre.less';

const genre = (props) => {
  return (
    <div className={classes.Genre}>
      {props.genre}
    </div>
  )
};
export default genre;