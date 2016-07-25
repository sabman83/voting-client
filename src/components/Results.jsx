import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return this.props.winner ?
      <Winner winner={this.props.winner}/> :
      <div> Hello! This is a results page!
      {this.props.pair.map(entry =>
        <div key={entry} className="entry">
          <h1>{entry} --- {this.props.tally.get(entry)}</h1>
        </div>
      )}
      <button className="next" onClick={this.props.next}>NEXT</button>
    </div>;

  }
}
