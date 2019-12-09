import React from 'react';
import { shallow } from 'enzyme';
import { SidePanel } from '../../../src/features/home/SidePanel';

describe('home/SidePanel', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SidePanel {...props} />
    );

    expect(
      renderedComponent.find('.home-side-panel').length
    ).toBe(1);
  });
});
