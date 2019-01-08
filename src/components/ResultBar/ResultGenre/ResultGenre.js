import React from 'react';
import classes from './ResultGenre.less';

const resultgenre = props => {
  return (
    <div className={classes.ResultGenre}>
      <p>{props.title} <span>{props.genre} {props.genretext}</span></p>
    </div>
  )
};
export default resultgenre;