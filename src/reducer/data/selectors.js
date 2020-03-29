// selectors.js
import {createSelector} from 'reselect';
import NameSpace from '../name-space/name-space.js';
import {ALL_GENRES} from '../data/data.js';

const NAME_SPACE = NameSpace.DATA;

export const getPromoFilm = (state) => {
  return state[NAME_SPACE].promo;
};

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const getFilmsFullInfo = (state) => {
  return state[NAME_SPACE].filmsFullInfo;
};

export const getFilmsInfo = (state) => {
  return state[NAME_SPACE].filmsInfo;
};

export const getFilmsByGenre = createSelector(
    getFilmsFullInfo,
    getGenre,
    (resultOne, resultTwo) => {
      let result = [];
      if (resultTwo === ALL_GENRES) {
        result = resultOne;
      } else {
        result = resultOne.filter((it) => it.genre.indexOf(resultTwo) > -1);
      }
      return result.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          poster: movie.poster,
          altPoster: movie.altPoster,
          src: movie.src,
          preview: movie.preview,
        };
      });
    }
);
