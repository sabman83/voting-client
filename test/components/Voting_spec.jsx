import Voting from  '../../src/components/Voting';
import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} from 'react-addons-test-utils';
import {expect} from 'chai';

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={['Train', 'Pulp']}/>
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);

    expect(buttons[0].textContent).to.equal('Train');
    expect(buttons[1].textContent).to.equal('Pulp');
  });

  it('invokes callback when a button is clicked', () => {
    let votedWith;
    const vote = (entry) => {
      votedWith = entry;
    }

    const component = renderIntoDocument(
      <Voting
        vote={vote}
        pair={['Train', 'Pulp']}
        />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    Simulate.click(buttons[0]);

    expect(votedWith).to.equal('Train');

  });

  it('disables voted button and adds the Voted text', () => {
    const component = renderIntoDocument(
      <Voting
        hasVoted={'Train'}
        pair={['Train', 'Pulp']}
        />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons[0].hasAttribute('disabled')).to.equal(true);
    expect(buttons[0].textContent).to.contain('Voted');
    expect(buttons[1].hasAttribute('disabled')).to.equal(false);
  });

  it('only shows the winner and no buttons',() => {
    const component = renderIntoDocument(
      <Voting
        winner={'Train'}
        pair={['Train', 'Pulp']}
        />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    const winnerDiv = scryRenderedDOMComponentsWithTag(component, 'div');

    expect(buttons.length).to.equal(0);
    expect(winnerDiv[0].textContent).to.equal('Winner is Train');


  });
});
