import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/volley-mgt/DefaultPage';

describe('volley-mgt/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      volleyMgt: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.volley-mgt-default-page').length
    ).toBe(1);
  });
});
