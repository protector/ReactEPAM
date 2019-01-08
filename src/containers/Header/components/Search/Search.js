import React from 'react';
import classes from './Search.less';
import Field from './Field/Field';
import Button from './Button/Button';
import Filter from './Filter/Filter';

const search = props => {
	const fieldTitle = 'find your movie',
				filterTitle = 'search by',
				filterTypes = [{title: 'title', selected: true}, {title: 'genre', selected: false}],
				buttonTitle = 'search';

	return (
		<div className={classes.Search}>
			<Field title={fieldTitle} />
			<Button title={buttonTitle} />
			<Filter title={filterTitle}	filtertypes={filterTypes} />
		</div>
	)
};

export default search;