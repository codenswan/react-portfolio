import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Header from './components/header/Header.jsx';
import StickyFooter from './components/footer/StickyFooter';
import NoMatch from './pages/NoMatch.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={['/', '/about']}>
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <StickyFooter />
      </div>
    </Router>
  );
}
