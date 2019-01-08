import React from 'react';
import classes from './ResultBar.less';
import ResultCounter from './ResultCounter/ResultCounter';
import ResultSort from './ResultSort/ResultSort';
import ResultGenre from './ResultGenre/ResultGenre';

const resultbar = props => {
  const resultText = 'movies found',
        resultValue = '7',
				sortTitle = 'Sort by',
        sortTypes = [{title: 'release date', selected: false}, {title: 'rating', selected: true}],
        genreTitle = 'Films by',
        genre = 'Drama',
        genretext = 'genre';

	return (
		<div className={classes.ResultBar}>
			<ResultCounter text={resultText} value={resultValue} />
			<ResultSort title={sortTitle} sorttypes={sortTypes}/>
		</div>
	)
};
//<ResultGenre title={genreTitle} genre={genre} genretext={genretext}/>

export default resultbar;