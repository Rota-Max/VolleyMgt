import React from 'react';
import { shallow } from 'enzyme';
import { AddMatch } from '../../../src/features/home/AddMatch';

describe('home/AddMatch', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <AddMatch {...props} />
    );

    expect(
      renderedComponent.find('.home-add-match').length
    ).toBe(1);
  });
});
