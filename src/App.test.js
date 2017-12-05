import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

it('renders without crashing', () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot();
});