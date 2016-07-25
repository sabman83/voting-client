import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';
import {Router, Route, hashHistory} from 'react-router';
import Results from './components/Results'
import App from './components/App';

const pair = ['Trainspotting', 'Pulp Fiction'];

const routes = <Route component={App}>
  <Route path="/" component={Voting} />
  <Route path="/results" component={Results}/>
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
