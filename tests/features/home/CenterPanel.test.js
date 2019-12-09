import React from 'react';
import { shallow } from 'enzyme';
import { CenterPanel } from '../../../src/features/home/CenterPanel';

describe('home/CenterPanel', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CenterPanel {...props} />
    );

    expect(
      renderedComponent.find('.home-center-panel').length
    ).toBe(1);
  });
});
