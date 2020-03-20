// reducer.js
import {filmsFullInfo, promoMovie} from './mocks/films.js';

import {extend} from './utils.js';

export const ALL_GENRES = `All genres`;

export const selectMoviesByGenre = (genre) => {
  let movies = filmsFullInfo;
  if (genre === undefined) {
    return movies;
  }
  if (genre !== ALL_GENRES) {
    movies = filmsFullInfo.filter((movie) => {
      return (movie.genre.findIndex((item) => {
        return item === genre;
      }) > -1);
    });
  }
  if (movies.length > 0) {
    return movies.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        poster: movie.poster,
        altPoster: movie.altPoster,
        src: movie.src,
      };
    });
  }
  return [];
};

const initialState = {
  promo: promoMovie,
  // список карточек фильмов с короткой информацией
  filmsInfo: selectMoviesByGenre(ALL_GENRES),
  // текущая страница
  pageId: 0,
  // активная карточка
  movieId: -1,
  // текущий жанр
  genre: ALL_GENRES,
};

export const ActionType = {
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  SET_MOVIE_ID: `SET_MOVIE_ID`,
  SET_PAGE_ID: `SET_PAGE_ID`,
  SET_PROMO_MOVIE: `SET_PROMO_MOVIE`,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        filmsInfo: selectMoviesByGenre(action.payload),
      });
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        genre: action.payload,
      });
    case ActionType.SET_MOVIE_ID:
      return extend(state, {
        movieId: action.payload,
      });
    case ActionType.SET_PAGE_ID:
      return extend(state, {
        pageId: action.payload,
      });
    case ActionType.SET_PROMO_MOVIE:
      return extend(state, {
        promo: action.payload,
      });
  }
  return state;
};

export const ActionCreator = {
  getFilmsInfo: (genre) => ({
    type: ActionType.GET_MOVIES_BY_GENRE,
    payload: genre,
  }),
  setCurrentGenre: (genre) => ({
    type: ActionType.SET_CURRENT_GENRE,
    payload: genre,
  }),
  setMovieId: (id) => ({
    type: ActionType.SET_MOVIE_ID,
    payload: id,
  }),
  setPageId: (id) => ({
    type: ActionType.SET_PAGE_ID,
    payload: id,
  }),
  setPromoMovie: (promo) => ({
    type: ActionType.SET_PROMO_MOVIE,
    payload: promo,
  }),
};
