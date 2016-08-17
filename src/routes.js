import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App/App.jsx';
import Home from './pages/HomePage/HomePage.jsx';
import Skills from './pages/SkillsPage/SkillsPage.jsx';
import Projects from './pages/ProjectsPage/ProjectsPage.jsx';
import Companies from './pages/CompaniesPage/CompaniesPage.jsx';
import About from './pages/AboutPage/AboutPage.jsx';
import Contact from './pages/ContactPage/ContactPage.jsx';
import NoMatch from './pages/NotFoundPage/NotFoundPage.jsx';

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/companies" component={Companies} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
);

export default routes;
