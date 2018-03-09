import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Details from './pages/details';

export default class App extends Component {
	render() {
		return(
				<BrowserRouter>
					<div>
						<Route
							exact
							path="/"
							component={ Home }
						/>
						<Route
							path="/details"
							component={ Details }
						/>
					</div>
				</BrowserRouter>
		)
	}
}
