import React from 'react';
import { shallow } from 'enzyme';
import { Soggetto } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Soggetto />);
  expect(renderedComponent.find('.home-soggetto').length).toBe(1);
});
