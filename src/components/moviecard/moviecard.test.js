// moviecard.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './moviecard.jsx';

const filmInfo = {
  id: 201,
  title: `Rampage`,
  poster: `img/rampage.jpg`,
  altPoster: `rampage poster`,
};

const movieCardActivateHandler = () => {};
const movieCardClickHandler = () => {};

it(`<MovieCard /> should render Rampage small card`, () => {
  const tree = renderer
    .create(<MovieCard
      movie={filmInfo}
      movieCardActivateHandler={movieCardActivateHandler}
      movieCardClickHandler={movieCardClickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
