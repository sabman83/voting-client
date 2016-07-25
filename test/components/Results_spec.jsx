import React from 'react';
import {expect} from 'chai';

import Results from '../../src/components/Results';
import {List, Map} from 'immutable';
import {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} from 'react-addons-test-utils';

describe('Results', () => {

  it('shows the pairs with tally', () => {
    const component = renderIntoDocument(<Results pair={['Train', 'Pulp']} tally={Map({
      'Train': 4,
      'Pulp': 10
    })}/>);

    const entries = scryRenderedDOMComponentsWithClass(component, 'entry');

    expect(entries.length).to.equal(2)
    expect(entries[0].textContent).to.contain('Train');
    expect(entries[0].textContent).to.contain('4');
    expect(entries[1].textContent).to.contain('Pulp');
    expect(entries[1].textContent).to.contain('10');

  });

  it('invokes the next callback when button is clicked', () => {

    let wasCalled = false;
    const nextCallback = () => wasCalled = true;

    const component = renderIntoDocument(<Results next={nextCallback} pair={['Train', 'Pulp']} tally={Map({
      'Train': 4,
      'Pulp': 10
    })}/>);



    const nextButton = scryRenderedDOMComponentsWithClass(component, 'next')[0];

    Simulate.click(nextButton);

    expect(wasCalled).to.equal(true);
  });

  it('shows the winners', () => {
     const component = renderIntoDocument(<Results winner={'Train'} pair={['Train', 'Pulp']} tally={Map({
      'Train': 4,
      'Pulp': 10
    })}/>);

     const winner = scryRenderedDOMComponentsWithClass(component, 'winner')[0];

     expect(winner).to.be.ok;
     expect(winner.textContent).to.contain('Train');
  });
});

