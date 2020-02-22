// moviecard-full.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './moviecard-full.jsx';

const detailedFilmInfo = {
  id: 550,
  title: `Little Women`,
  poster: `img/little-woman-poster.jpg`,
  altPoster: `ittle Women poster`,
  background: `img/little-wooman-bg.jpg`,
  altBackground: `Movie background`,
  description: `Based on Loiusa May Alcott’s classic novel with the same name, Little Women is a timeless tale of love, life and ambitions`,
  review: `A writer, a sketch artist, an aspiring actress and a budding pianist. All four March sisters are gifted with a unique talent, but they live in the times where the only two choices for women are marriage and death. Writer-director Greta Gerwig`,
  genre: [`Drama`, `Romance`],
  year: 2019,
  duration: `2h 15min`,
  age: `16+`,
  rating: {
    score: `8.0`,
    level: `very good`,
    count: 150,
  },
  director: `Greta Gerwig`,
  starring: [`Saoirse Ronan`, `Emma Watson`, `Florence Pugh`, `Meryl Streep`, `Timothee Chalamet`],
};

it(`<MovieCardFull /> should render detailed movie card`, () => {
  const tree = renderer
    .create(<MovieCard
      detailMovieInfo={detailedFilmInfo}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
