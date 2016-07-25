import React from 'react';
import Vote from './Vote';
import Winner from './Winner';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Voting extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <div>
      {this.props.winner ?
        <Winner winner={this.props.winner}/> :
        <Vote {...this.props}/>
      }
    </div>;
  }
}
