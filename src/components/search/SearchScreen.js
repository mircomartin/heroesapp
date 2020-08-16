import React, { useState, useMemo } from 'react';
import queryString from 'query-string';

import HeroCard from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

const SearchScreen = ({ history }) => {
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);

	const [value, setValue] = useState({
		hero: q,
	});

	const { hero } = value;

	const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

	const handleInputChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
	};

	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?q=${hero}`);
	};

	return (
		<div>
			<h2>Search Screen</h2>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Search Form</h4>
					<form onSubmit={handleSearch}>
						<div className="form-group">
							<input
								type="text"
								placeholder="Find you Hero..."
								className="form-control"
								onChange={handleInputChange}
								name="hero"
								value={hero}
							/>
						</div>
						<div className="form-group">
							<button
								type="submit"
								className="btn m-1 btn-block btn-outline-primary"
							>
								Search...
							</button>
						</div>
					</form>
				</div>

				<div className="col-7">
					<h4>Results</h4>
					<hr />

					{q === '' && (
						<div className="alert alert-info">Search a Hero</div>
					)}

					{q !== '' && heroesFilter.length === 0 && (
						<div className="alert alert-danger">
							There is no a hero with {q}
						</div>
					)}

					{heroesFilter.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchScreen;
