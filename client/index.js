import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'; //interacting with GraphQL (making request and storing data in backend)
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App'; 
import SongCreate from './components/SongCreate';
import './style/style.css';
import SongDetails from './components/SongDetail';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return(
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}/>
          <Route path="songs/new" component={SongCreate}/>
          <Route path="songs/:id" component={SongDetails}/>
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
