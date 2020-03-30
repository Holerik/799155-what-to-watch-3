// sign-in.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';


const setMovieId = () => {};
const setPageId = () => {};
const onSubmit = () => {};

it(`<SignIn /> component should render correctly`, () => {
  const tree = renderer
    .create(<SignIn
      setPageId={setPageId}
      setMovieId={setMovieId}
      onSubmit={onSubmit}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
