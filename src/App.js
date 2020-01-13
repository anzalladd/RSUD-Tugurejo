import React from 'react';
import { ROUTES } from './configs';
import pages from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route component={pages.Beranda} exact path={ROUTES.BERANDA} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
