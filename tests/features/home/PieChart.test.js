import React from 'react';
import { shallow } from 'enzyme';
import { PieChart } from '../../../src/features/home/PieChart';

describe('home/PieChart', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <PieChart {...props} />
    );

    expect(
      renderedComponent.find('.home-pie-chart').length
    ).toBe(1);
  });
});
