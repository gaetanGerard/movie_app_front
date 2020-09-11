import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Css Classes
import './App.css';

// Import Custom Component
import Home from './components/pages/Home';
import Auth from './components/pages/Auth';
import Movies from './components/pages/Movies';
import Tv from './components/pages/Tv';
import Profile from './components/pages/Profile';
import Cinema from './components/pages/Cinema';
import Favorites from './components/pages/Favorites';
import PrivateRoute from './components/PrivateRoute';

// Import material-ui Component
import Box from '@material-ui/core/Box';

// Init ApolloClient
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Router>
          <Box>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/auth' component={Auth} />
              <Route exact path='/movies' component={Movies} />
              <Route exact path='/tv' component={Tv} />
              <Route exact path='/cinema' component={Cinema} />
              <PrivateRoute exact path='/profile' component={Profile} />
              <PrivateRoute
                exact
                path='/profile/favorites'
                component={Favorites}
              />
            </Switch>
          </Box>
        </Router>
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default App;
