import React from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', 'Pulp Fiction');
const tally = Map({
  'Trainspotting': 4,
  'Pulp Fiction':  10
});

export default class App extends React.Component {
  render() {
    return React.cloneElement(this.props.children, { winner: 'Pulp Fiction', pair: pair, tally: tally});
  }
}
