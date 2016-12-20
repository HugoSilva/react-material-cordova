
import React from 'react';
import Page from '../src/pages/NotFoundPage/NotFoundPage';
import renderer from 'react-test-renderer';

it('Not found page is rendered properly', () => {
  const component = renderer.create(
    <Page />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
