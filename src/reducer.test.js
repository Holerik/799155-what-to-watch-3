// reducer.test.js
import {ALL_GENRES, reducer, ActionCreator, ActionType, selectMoviesByGenre} from "./reducer.js";
import {promoMovie} from './mocks/films.js';


const filmsInfo = [
  {
    id: 101,
    title: `Reducer`,
    poster: `img/reducer.jpg`,
    altPoster: `reducer poster`,
    src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
  }
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    filmsInfo: selectMoviesByGenre(ALL_GENRES),
    pageId: 0,
    movieId: -1,
    genre: ALL_GENRES,
    promo: promoMovie,
  });
});

it(`Reducer should set current movieId by a given value`, () => {
  expect(reducer({
    filmsInfo,
    pageId: 0,
    movieId: -1,
    genre: ALL_GENRES,
  }, {
    type: ActionType.SET_MOVIE_ID,
    payload: 10,
  })).toEqual({
    filmsInfo,
    pageId: 0,
    movieId: 10,
    genre: ALL_GENRES,
  });
});


it(`Reducer should set current pageId by a given value`, () => {
  expect(reducer({
    filmsInfo,
    pageId: 0,
    movieId: -1,
    genre: ALL_GENRES,
  }, {
    type: ActionType.SET_PAGE_ID,
    payload: 2,
  })).toEqual({
    filmsInfo,
    pageId: 2,
    movieId: -1,
    genre: ALL_GENRES,
  });
});

it(`Reducer should set current genre by a given value`, () => {
  expect(reducer({
    filmsInfo,
    pageId: 0,
    movieId: -1,
    genre: ALL_GENRES,
  }, {
    type: ActionType.SET_CURRENT_GENRE,
    payload: `Crime`,
  })).toEqual({
    filmsInfo,
    pageId: 0,
    movieId: -1,
    genre: `Crime`,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting movieId returns correct action`, () => {
    expect(ActionCreator.setMovieId(5)).toEqual({
      type: ActionType.SET_MOVIE_ID,
      payload: 5,
    });
  });

  it(`Action creator for setting pageId returns correct action`, () => {
    expect(ActionCreator.setPageId(2)).toEqual({
      type: ActionType.SET_PAGE_ID,
      payload: 2,
    });
  });

  it(`Action creator for setting the genre returns correct action`, () => {
    expect(ActionCreator.setCurrentGenre(`Dramas`)).toEqual({
      type: ActionType.SET_CURRENT_GENRE,
      payload: `Dramas`,
    });
  });
});
