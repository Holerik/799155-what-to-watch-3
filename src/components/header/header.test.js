// header.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';

const setPageId = () => {};
const setMovieId = () => {};


it(`<Header /> should render correctly`, () => {
  const tree = renderer
    .create(<Header
      avatar={`img/avatar.jpg`}
      setPageId={setPageId}
      setMovieId={setMovieId}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
