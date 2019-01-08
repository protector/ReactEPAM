import React from 'react';
import classes from './Logo.less';

const logo = props => {
  let usedClasses = classes.Logo;
  if(props.page === 'info'){
    usedClasses = [classes.Logo, classes.info].join(' ');
  }
  return <p className={usedClasses}>netflixroulette</p>;
}

export default logo;