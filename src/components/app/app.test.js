// app.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const filmsShortInfo = [
  {
    id: 33,
    title: `Overboard`,
    poster: `img/overboard.jpg`,
    altPoster: `overboard poster`,
    src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
  }
];

const filmsFullInfo = [
  {
    id: 2350,
    title: `Little Women`,
    poster: `img/little-woman-poster.jpg`,
    altPoster: `ittle Women poster`,
    background: `img/little-wooman-bg.jpg`,
    altBackground: `Movie background`,
    description: `Based on Loiusa May Alcott’s classic novel with the same name, Little Women is a timeless tale of love, life and ambitions`,
    review: `A writer, a sketch artist, an aspiring actress and a budding pianist. All four March sisters are gifted with a unique talent, but they live in the times where the only two choices for women are marriage and death. Writer-director Greta Gerwig`,
    reviews: [0, 1, 2, 3, 4],
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
  }
];

const promoMovie = {
  id: 150,
  title: `Fantomas`,
  poster: `img/fantomas-poster.jpg`,
  altPoster: `Fantomas poster`,
  background: `img/fantomas-bg.jpg`,
  altBackground: `Fantomas background`,
  description: `The best men of France - a brave journalist and an extremely energetic commissioner - attack the trail of a mysterious criminal mastermind`,
  review: `A supervillain known as Fantomas tries to foil a couple of foes: the police inspector who is trying to catch him and the reporter who doesn’t believe in his existence`,
  reviews: [0, 1, 2, 3, 4],
  genre: [`Comedy`, `Adventure`, `Crime`],
  year: 1964,
  duration: `1h 40min`,
  age: `16+`,
  rating: {
    score: `7.0`,
    level: `very good`,
    count: 110,
  },
  director: `André Hunebelle`,
  starring: [`Jean Marais`, `Louis de Funès`, `Mylène Demongeot`, `Jacques Dynam`, `Robert Dalban`],
  src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
};

const setPageId = () => {};
const setMovieId = () => {};
const setGenre = () => {};

it(`<App /> should render Fantomas film card`, () => {
  const store = mockStore({
    filmsInfo: filmsShortInfo,
    pageId: 0,
    movieId: -1,
    genre: `All genres`,
  });
  const tree = renderer
    .create(<Provider store={store}>
      <App
        filmsInfo={filmsShortInfo}
        filmsFullInfo={filmsFullInfo}
        promoMovie={promoMovie}
        setMovieId={setMovieId}
        setPageId={setPageId}
        setGenre={setGenre}
        movieId={-1}
        pageId={0}
        genre={`All genres`}
      />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
