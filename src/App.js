import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import history from './history';

import './ui/scss/App.scss';
import { Home, About, Category, Game, SearchResults } from './pages';
import { GlobalLayout } from './components';

const App = () => {
  const location = useLocation();

  return (
    <GlobalLayout>
      <Switch location={location} key={location.key} history={history}>
        <Route exact path="/search/:searchQuery" component={SearchResults} />
        <Route exact path="/genre/:slug" component={Category} />
        <Route exact path="/game/:slug" component={Game} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route component={About} />
      </Switch>
    </GlobalLayout>
  )
}

export default App;
