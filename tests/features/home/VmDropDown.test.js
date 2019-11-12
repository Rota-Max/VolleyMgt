import React from 'react';
import { shallow } from 'enzyme';
import { VmDropDown } from '../../../src/features/home/VmDropDown';

describe('home/VmDropDown', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <VmDropDown {...props} />
    );

    expect(
      renderedComponent.find('.home-vm-drop-down').length
    ).toBe(1);
  });
});
