// moviecard.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './moviecard.jsx';

const filmInfo = {
  id: 201,
  title: `Rampage`,
  poster: `img/rampage.jpg`,
  altPoster: `rampage poster`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  preview: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
};

const movieCardActivateHandler = () => {};
const movieCardOutHandler = () => {};
const movieCardClickHandler = () => {};

it(`<MovieCard /> should render moviee small card`, () => {
  const tree = renderer
    .create(<MovieCard
      movie={filmInfo}
      movieCardActivateHandler={movieCardActivateHandler}
      movieCardOutHandler={movieCardOutHandler}
      movieCardClickHandler={movieCardClickHandler}
      canPlayVideo={false}
      activeMovieId={0}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
