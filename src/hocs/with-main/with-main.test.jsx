// with-main.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from '../../components/main/main.jsx';
import withMain from './with-main.jsx';


const Main = withMain(MainPage);

const filmsInfo = [
  {
    id: 555,
    title: `With Unsane`,
    poster: `img/with-unsane.jpg`,
    altPoster: `whis-unsane poster`,
    src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
    preview: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
  },
  {
    id: 255,
    title: `Second With Unsane`,
    poster: `img/second-with-unsane.jpg`,
    altPoster: `whis-second-unsane poster`,
    src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
    preview: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
  }
];

const filmsFullInfo = [
  {
    id: 2357,
    title: `With Little Women`,
    poster: `img/with-little-woman-poster.jpg`,
    altPoster: `with-little Women poster`,
    background: `img/with-little-wooman-bg.jpg`,
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
    preview: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
  }
];

const promoMovie = {
  id: 150,
  title: `With Fantomas`,
  poster: `img/with-fantomas-poster.jpg`,
  altPoster: `With Fantomas poster`,
  background: `img/with-fantomas-bg.jpg`,
  altBackground: `With Fantomas background`,
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
  preview: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
};

const setMovieCardId = () => {};
const setPageId = () => {};
const setGenre = () => {};
const playButtonClickHandler = () => {};
const listButtonClickHandler = () => {};

it(`Should correctly render the main page`, () => {
  const tree = renderer.create(
      <Main
        filmsInfo={filmsInfo}
        filmsFullInfo={filmsFullInfo}
        setMovieId={setMovieCardId}
        promoMovie={promoMovie}
        setPageId={setPageId}
        setGenre={setGenre}
        genre={`All genres`}
        playButtonClickHandler={playButtonClickHandler}
        listButtonClickHandler={listButtonClickHandler}
      >
      </Main>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

