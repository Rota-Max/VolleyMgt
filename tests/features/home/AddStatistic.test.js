import React from 'react';
import { shallow } from 'enzyme';
import { AddStatistic } from '../../../src/features/home/AddStatistic';

describe('home/AddStatistic', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <AddStatistic {...props} />
    );

    expect(
      renderedComponent.find('.home-add-statistic').length
    ).toBe(1);
  });
});
