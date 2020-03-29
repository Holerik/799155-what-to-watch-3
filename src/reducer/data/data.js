// data.js
import {extend} from '../../utils.js';

export const ALL_GENRES = `All genres`;

export const errorHandle = (error, signal) => {
  if (signal === undefined) {
    const node = document.createElement(`div`);
    node.style = `width: 180px; margin: 0 auto; text-align: center; background-color: red;`;
    node.textContent = error;
    document.body.insertAdjacentElement(`afterbegin`, node);
  } else {
    signal();
  }
};

const selectPromoMovie = (state, title) => {
  const movie = state.filmsFullInfo.find((film) => {
    return film.title === title;
  });
  if (movie !== undefined) {
    return {
      id: movie.id,
      title: movie.title,
      poster: movie.poster,
      altPoster: movie.altPoster,
      src: movie.src,
      preview: movie.preview,
    };
  } else {
    return undefined;
  }
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  SET_PROMO_MOVIE: `SET_PROMO_MOVIE`,
};

const initilalState = {
  // промо-трейлер
  promo: undefined,
  // список карточек фильмов с полной информацией
  filmsFullInfo: [],
  // список карточек фильмов с короткой информацией
  filmsInfo: [],
  // текущий жанр
  genre: ALL_GENRES,
};

const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },
  setPromoMovie: (state, title) => {
    return {
      type: ActionType.SET_PROMO_MOVIE,
      payload: selectPromoMovie(state, title),
    };
  },
  setGenre: (genre) => {
    return {
      type: ActionType.SET_CURRENT_GENRE,
      payload: genre,
    };
  },
};

const convertTimeToString = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time - hours * 60;
  return `${hours}h ${mins}min`;
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        initilalState.filmsFullInfo = response.data.map((movie) => {
          return {
            id: movie.id,
            title: movie.name,
            poster: movie[`poster_image`],
            altPoster: movie.name,
            background: movie[`background_image`],
            altBackground: movie.name,
            description: movie.description,
            review: ``,
            reviews: [0],
            genre: [movie.genre],
            year: movie.released,
            duration: convertTimeToString(movie[`run_time`]),
            age: `16+`,
            rating: {
              score: `${movie.rating}`,
              level: ``,
              count: movie[`scores_count`],
            },
            director: movie.director,
            starring: movie.starring,
            src: movie[`video_link`],
            preview: movie[`preview_video_link`],
          };
        });
        dispatch(ActionCreator.loadMovies(initilalState.filmsFullInfo));
        dispatch(ActionCreator.setGenre(ALL_GENRES));
      })
      .catch(errorHandle);
  },
};

const reducer = (state = initilalState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        filmsFullInfo: action.payload,
      });
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        filmsInfo: action.payload,
      });
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        genre: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
