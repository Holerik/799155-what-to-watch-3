// wtw.js
import {extend} from '../../utils.js';

const initialState = {
  // текущая страница
  pageId: 0,
  // активная карточка
  movieId: -1,
  // проигрывание видео
  movie: undefined,
};

const ActionType = {
  SET_MOVIE_ID: `SET_MOVIE_ID`,
  SET_PAGE_ID: `SET_PAGE_ID`,
  PLAY_MOVIE: `PLAY_MOVIE`,
};

const ActionCreator = {
  setMovieId: (id) => ({
    type: ActionType.SET_MOVIE_ID,
    payload: id,
  }),
  setPageId: (id) => ({
    type: ActionType.SET_PAGE_ID,
    payload: id,
  }),
  playMovie: (movie) => ({
    type: ActionType.PLAY_MOVIE,
    payload: movie,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_MOVIE_ID:
      return extend(state, {
        movieId: action.payload,
      });
    case ActionType.SET_PAGE_ID:
      return extend(state, {
        pageId: action.payload,
      });
    case ActionType.PLAY_MOVIE:
      return extend(state, {
        movie: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
