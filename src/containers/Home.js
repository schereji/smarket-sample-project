import React from 'react';
import {PopularEvent} from '../components';
import PropTypes from 'prop-types';

export const Home = (props) => {
	if(props.events.length === 0){
		return (
			<section className="loader"></section>
		);
	} else {
		return (
			<main className="popular-events container">
				<h1>Popular Upcoming Events</h1>
				{props.events.map((item, i) => (
					<PopularEvent {...props} item={item} key={i} />
				))}
			</main>
		);
	}
};

Home.propTypes = {
	events: PropTypes.array.isRequired,
};
