import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../pages/Quote';

it('renders correctly', () => {
  const tree = renderer
    .create(<Quotes />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
