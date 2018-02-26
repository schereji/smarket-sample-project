import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

export const PopularEvent = (props) => {
	return (
		<Link to={`/event/id/${props.item.id}`} className="row" data-id={props.item.id}>
			<section className={"event-list-item col-12"}>
				<p className="col-12 name">{props.item.name}</p>
				<p className="col-12 parent-name">{props.item.parent_name}</p>
			</section>
		</Link>
	);
};

PopularEvent.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		parent_name: PropTypes.string.isRequired
	}),
};
