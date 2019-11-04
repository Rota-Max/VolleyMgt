import React from 'react';
import { shallow } from 'enzyme';
import { Soggetto } from '../../../src/features/home/Soggetto';

describe('home/Soggetto', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Soggetto {...props} />
    );

    expect(
      renderedComponent.find('.home-soggetto').length
    ).toBe(1);
  });
});
