import React from 'react';
import classes from './FilmInfo.less';
import Cover from './Cover/Cover';
import Button from './Button/Button';
import Description from './Description/Description';
import Rating from './Rating/Rating';
import Stats from './Stats/Stats';
import Title from './Title/Title';
import description from './Description/Description';

const filminfo = (props) => {
  const buttonTitle = 'search',
        infoTitle= 'CHASING CORAL',
        subTitle= 'Satellite Award Movies',
        ratingValue='4.1',
        year='2017',
        duration='93 min',
        src = '/src/assets/item-detailed.jpg',
        description = `Coral reefs around the world are vanishing at an unprecedented rate. A team of divers, photographers and scientists set out on a thrilling ocean adventure to discover why and to reveal the underwater mystery to the world.`;
	
	return (
		<div className={classes.FilmInfo}>
      <Button title={buttonTitle} />
      <div>
        <Cover src={src} />
        <div>
          <Title title={infoTitle} subtitle={subTitle} />
          <Rating value={ratingValue} />
          <Stats year={year} duration={duration} />
          <Description description={description} />
        </div>
      </div>
		</div>
	)
};

export default filminfo;