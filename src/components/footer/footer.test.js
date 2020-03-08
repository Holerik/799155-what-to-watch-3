// footer.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer.jsx';

const setPageId = () => {};
const setMovieId = () => {};

it(`<Footer /> should render correctly`, () => {
  const tree = renderer
    .create(<Footer
      setPageId={setPageId}
      setMovieId={setMovieId}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
