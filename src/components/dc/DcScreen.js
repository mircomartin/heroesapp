import React from 'react';
import HeroList from '../heroes/HeroList';

const DcScreen = () => {
	return (
		<>
			<h2>DC Comics</h2>
			<hr />
			<HeroList publisher="DC Comics" />
		</>
	);
};

export default DcScreen;
