// moviecard.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './moviecard.jsx';

const filmInfo = {
  id: 201,
  title: `Rampage`,
  preview: `img/rampage.jpg`,
  description: `When three different animals become infected with a dangerous pathogen, a primatologist and a geneticist team up to stop them from destroying Chicago`,
  genre: `Sci-Fi`,
};

const movieCardActivateHandler = () => {};

it(`<MovieCard /> should render Commuter small card`, () => {
  const tree = renderer
    .create(<MovieCard
      movie={filmInfo}
      movieCardActivateHandler={movieCardActivateHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
