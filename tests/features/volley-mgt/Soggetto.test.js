import React from 'react';
import { shallow } from 'enzyme';
import { Soggetto } from '../../../src/features/volley-mgt/Soggetto';

describe('volley-mgt/Soggetto', () => {
  it('renders node with correct class name', () => {
    const props = {
      volleyMgt: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Soggetto {...props} />
    );

    expect(
      renderedComponent.find('.volley-mgt-soggetto').length
    ).toBe(1);
  });
});
