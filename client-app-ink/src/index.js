import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';


// 3
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
