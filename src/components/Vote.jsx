import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Vote extends React.Component {

  isDisabled(entry) {
    return !!(this.props.hasVoted === entry);
  }

  hasVoted(entry) {
    return !!(this.props.hasVoted === entry);
  }

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return <div className="vote">
    {this.props.pair.map(entry =>
        <button className="entry"
          key={entry}
          disabled={this.isDisabled(entry)}
          onClick={() => this.props.vote(entry)}
          >
          <h1>{entry}</h1>

          {this.hasVoted(entry) ?
            <label>Voted</label> :
            null
          }
          </button>
      )}
    </div>;
  }
}
