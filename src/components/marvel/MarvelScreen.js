import React from 'react';
import HeroList from '../heroes/HeroList';

const MarvelScreen = () => {
	return (
		<>
			<h2>Marvel Comics</h2>
			<hr />
			<HeroList publisher="Marvel Comics" />
		</>
	);
};

export default MarvelScreen;
