// selectors.js
import NameSpace from '../name-space/name-space.js';

const NAME_SPACE = NameSpace.MOVIE;

export const getMovieId = (state) => {
  return state[NAME_SPACE].movieId;
};

export const getPageId = (state) => {
  return state[NAME_SPACE].pageId;
};

export const getMovie = (state) => {
  return state[NAME_SPACE].movie;
};
