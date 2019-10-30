import React from 'react';
import { shallow } from 'enzyme';
import { Statistics } from '../../../src/features/volley-mgt/Statistics';

describe('volley-mgt/Statistics', () => {
  it('renders node with correct class name', () => {
    const props = {
      volleyMgt: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Statistics {...props} />
    );

    expect(
      renderedComponent.find('.volley-mgt-statistics').length
    ).toBe(1);
  });
});
