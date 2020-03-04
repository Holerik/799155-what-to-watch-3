// moviecard-full.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFull from './moviecard-full.jsx';

const detailedFilmInfo = [
  {
    id: 0,
    title: `Little Women`,
    poster: `img/little-woman-poster.jpg`,
    altPoster: `ittle Women poster`,
    background: `img/little-wooman-bg.jpg`,
    altBackground: `Movie background`,
    description: `Based on Loiusa May Alcott’s classic novel with the same name, Little Women is a timeless tale of love, life and ambitions`,
    review: `A writer, a sketch artist, an aspiring actress and a budding pianist. All four March sisters are gifted with a unique talent, but they live in the times where the only two choices for women are marriage and death. Writer-director Greta Gerwig`,
    reviews: [1, 2],
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
    src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
  },
  {
    id: 2,
    title: `Little Women`,
    poster: `img/little-woman-poster.jpg`,
    altPoster: `ittle Women poster`,
    background: `img/little-wooman-bg.jpg`,
    altBackground: `Movie background`,
    description: `Based on Loiusa May Alcott’s classic novel with the same name, Little Women is a timeless tale of love, life and ambitions`,
    review: `A writer, a sketch artist, an aspiring actress and a budding pianist. All four March sisters are gifted with a unique talent, but they live in the times where the only two choices for women are marriage and death. Writer-director Greta Gerwig`,
    reviews: [1, 2],
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
    src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
  },
  {
    id: 3,
    title: `Little Women`,
    poster: `img/little-woman-poster.jpg`,
    altPoster: `ittle Women poster`,
    background: `img/little-wooman-bg.jpg`,
    altBackground: `Movie background`,
    description: `Based on Loiusa May Alcott’s classic novel with the same name, Little Women is a timeless tale of love, life and ambitions`,
    review: `A writer, a sketch artist, an aspiring actress and a budding pianist. All four March sisters are gifted with a unique talent, but they live in the times where the only two choices for women are marriage and death. Writer-director Greta Gerwig`,
    reviews: [1, 2],
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
    src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
  },
  {
    id: 4,
    title: `Little Women`,
    poster: `img/little-woman-poster.jpg`,
    altPoster: `ittle Women poster`,
    background: `img/little-wooman-bg.jpg`,
    altBackground: `Movie background`,
    description: `Based on Loiusa May Alcott’s classic novel with the same name, Little Women is a timeless tale of love, life and ambitions`,
    review: `A writer, a sketch artist, an aspiring actress and a budding pianist. All four March sisters are gifted with a unique talent, but they live in the times where the only two choices for women are marriage and death. Writer-director Greta Gerwig`,
    reviews: [1, 2],
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
    src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
  },
];

const setMovieCardId = () => {};

it(`<MovieCardFull /> should render detailed movie card`, () => {
  const tree = renderer
    .create(<MovieCardFull
      filmsFullInfo={detailedFilmInfo}
      movieId={0}
      setMovieCardId={setMovieCardId}
    >
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
          <li className="movie-nav__item movie-nav__item--active">
            <a href="#" className="movie-nav__link">Details</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
    </MovieCardFull>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
