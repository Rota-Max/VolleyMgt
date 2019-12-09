import React from 'react';
import { shallow } from 'enzyme';
import { AllStatistic } from '../../../src/features/home/AllStatistic';

describe('home/AllStatistic', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <AllStatistic {...props} />
    );

    expect(
      renderedComponent.find('.home-all-statistic').length
    ).toBe(1);
  });
});
