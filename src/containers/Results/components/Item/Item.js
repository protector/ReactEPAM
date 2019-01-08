import React from 'react';
import classes from './Item.less';
import Image from './Image/Image';
import Release from './Release/Release';
import Title from './Title/Title';
import Genre from './Genre/Genre';

const items = props => {
  return (
		<div className={classes.Item}>
      <Image image={props.image} />
      <div>
        <Release release={props.release} />
        <Title title={props.title} />
        <Genre genre={props.genre} />
      </div>
		</div>
	)
};

export default items;