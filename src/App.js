import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './ui/scss/App.scss';

import { Home, About, Category, Game } from './pages';
import { GlobalLayout } from './components';

const App = () => {
  const location = useLocation();

  return (
    <GlobalLayout>
      <Switch location={location} key={location.key}>
        <Route exact path="/:slug" component={Category} />
        <Route exact path="/:slug" component={Category} />
        <Route exact path="/game/:slug" component={Game} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route component={About} />
      </Switch>
    </GlobalLayout>
  )
}

export default App;
