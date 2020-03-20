// main.e2e.test.js
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const filmsInfo = [
  {
    id: 501,
    title: `The man`,
    poster: `img/the-man.jpg`,
    altPoster: `the man poster`,
    src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
  }
];

const filmsFullInfo = [
  {
    id: 235,
    title: `Big Women`,
    poster: `img/lbig-woman-poster.jpg`,
    altPoster: `big Women poster`,
    background: `img/big-wooman-bg.jpg`,
    altBackground: `Movie background`,
    description: `Based on Loiusa May Alcott’s classic novel with the same name, Little Women is a timeless tale of love, life and ambitions`,
    review: `A writer, a sketch artist, an aspiring actress and a budding pianist. All four March sisters are gifted with a unique talent, but they live in the times where the only two choices for women are marriage and death. Writer-director Greta Gerwig`,
    reviews: [0, 1, 2, 3, 4],
    genre: [`Drama`, `Thriller`],
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
  title: `Phantomas`,
  poster: `img/phantomas-poster.jpg`,
  altPoster: `Fantomas poster`,
  background: `img/phantomas-bg.jpg`,
  altBackground: `Phantomas background`,
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

const setMovieCardId = () => {};
const setPageId = () => {};
const setGenre = () => {};
const setShowLimits = () => {};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should play button be pressed`, () => {
  const playButtonClickHandler = jest.fn();
  const listButtonClickHandler = jest.fn();

  const main = shallow(
      <Main
        filmsInfo={filmsInfo}
        filmsFullInfo={filmsFullInfo}
        setMovieId={setMovieCardId}
        promoMovie={promoMovie}
        setPageId={setPageId}
        setGenre={setGenre}
        setShowLimits={setShowLimits}
        genre={`All genres`}
        firstCard= {0}
        lastCard={0}
        playButtonClickHandler={playButtonClickHandler}
        listButtonClickHandler={listButtonClickHandler}
      />
  );
  const playButton = main.find(`button.btn--play`);
  playButton.props().onClick();
  expect(playButtonClickHandler.mock.calls.length).toBe(1);
});

it(`Should list button be pressed`, () => {
  const playButtonClickHandler = jest.fn();
  const listButtonClickHandler = jest.fn();

  const main = shallow(
      <Main
        filmsInfo={filmsInfo}
        filmsFullInfo={filmsFullInfo}
        setMovieId={setMovieCardId}
        promoMovie={promoMovie}
        setPageId={setPageId}
        setGenre={setGenre}
        setShowLimits={setShowLimits}
        genre={`All genres`}
        firstCard= {0}
        lastCard={0}
        playButtonClickHandler={playButtonClickHandler}
        listButtonClickHandler={listButtonClickHandler}
      />
  );
  const listButton = main.find(`button.btn--list`);
  listButton.props().onClick();
  expect(listButtonClickHandler.mock.calls.length).toBe(1);
});
