import React from 'react';
import { 
	BrowserRouter as Router, 
	Switch,
	Redirect,
	Route
} from "react-router-dom";
import Home from './Router/Home'
import Movie from './Router/Movie'
import TVshow from './Router/TV'
import Search from './Router/Search'

export default () => (
	<Router>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/movie" component={Movie} />
			<Route path="/tv" component={TVshow} />
			<Route path="/search" component={Search} />
			<Redirect from="*" to="/" / >
		</Switch>
	</Router>
)


