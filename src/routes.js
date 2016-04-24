import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
    
import App from './components/App/App.jsx';
import Home from './pages/HomePage/HomePage.jsx';
import About from './pages/AboutPage/AboutPage.jsx';
import NoMatch from './pages/NotFoundPage/NotFoundPage.jsx';

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Home} />
            <Route path="/about" component={About} />
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
);

export default routes;