import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './ui/scss/App.scss';

import { Home, About, Category } from './pages';
import { GlobalLayout } from './components';

const App = () => {
  const location = useLocation();

  return (
    <GlobalLayout>
      <Switch location={location} key={location.key}>
        <Route exact path="/shooter" component={Category} />
        <Route exact path="/adventure" component={Category} />
        <Route exact path="/the-last-of-us" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </GlobalLayout>
  )
}

export default App;
