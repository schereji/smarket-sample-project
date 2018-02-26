import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export class EventInformation extends Component {
	
	componentWillMount() {
		this.props.updateCurrentEventInformation({event: {}});
	}
	componentDidMount() {
		const eventById = `https://smarkets.com/v0/events/id/${this.props.match.params.id}/`;
		const corsAnywhereURL = 'https://cors-anywhere.herokuapp.com/';
		fetch(corsAnywhereURL+eventById)
			.then(res => res.json())
			.then(res => this.props.updateCurrentEventInformation(res));
	}
	
	render () {
		if (Object.keys(this.props.currentEvent).length === 0) {
			return <section className="loader"></section>
		} else {
			return (
				<main data-id={this.props.match.params.id} className="event-information-container container">
					<Link to={'/'} className="back row">Back To Popular Events</Link>
					<section className="event-information row">
						<p className="subject col-6">Event Name:</p><p className="content col-6">{this.props.currentEvent.name}</p>
						<p className="subject col-6">Event Type:</p><p className="content col-6">{this.props.currentEvent.event_type}</p>
						<p className="subject col-6">League:</p><p className="content col-6">{this.props.currentEvent.parent_name}</p>
						<p className="subject col-6">Start Time:</p><p className="content time col-6">{this.props.currentEvent.start_datetime}</p>
					</section>
				</main>
			)
		}
	}
}

EventInformation.propTypes = {
	currentEvents: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		parent_name: PropTypes.string.isRequired
	}),
};
