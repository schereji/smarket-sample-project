import React, { Component } from 'react';
import {Home} from './Home';
import {EventInformation} from './EventInformation';
import {Header} from '../components';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {
	state = {
		popularEvents: [],
		currentEvent: {}
	};
	
	updateCurrentEventInformation = (currentEvent) => {
		this.setState({currentEvent: currentEvent.event});
	};
	
	componentDidMount() {
		const popularEvents = 'https://smarkets.com/v0/events/popular/';
		const corsAnywhereURL = 'https://cors-anywhere.herokuapp.com/';
		fetch(corsAnywhereURL+popularEvents)
			.then(res => res.json())
			.then(res => this.setState({popularEvents: res.results}));
	};
	
	render() {
		return (
			<Router>
				<section className="smarkets-app">
					<Header />
					<Switch>
						<Route exact path="/index.html" render={({}) => (
							<Redirect to="/"/>
						)} />
						<Route path="/" render={(props) => (
							<Home {...props} to="/" label="Popular Events" events={this.state.popularEvents} />
						)} />
						<Route path="/event/id/:id" render={(props) => (
							<EventInformation {...props} to="/event/id/:id" label="Event" currentEvent={this.state.currentEvent} updateCurrentEventInformation={this.updateCurrentEventInformation}/>
						)}/>
						<Route render={() => <h1 class="page-not-found">Page Not Found</h1>} />
					</Switch>
				</section>
			</Router>
		);
	};
}

export default App;
