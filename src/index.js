// index.js
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import {filmsInfo, filmsFullInfo, promoMovie} from './mocks/films.js';
import {ALL_GENRES, reducer} from './reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer);

const state = {
  movieId: -1,
  pageId: 0,
  genre: ALL_GENRES,
};

const setMovieId = (movieId) => {
  state.movieId = movieId;
};

const setPageId = (pageId) => {
  state.pageId = pageId;
};

const setGenre = (genre) => {
  state.genre = genre;
};

ReactDom.render(
    <Provider store={store}>
      <App
        filmsInfo={filmsInfo}
        filmsFullInfo={filmsFullInfo}
        promoMovie={promoMovie}
        setMovieId={setMovieId}
        setPageId={setPageId}
        movieId={state.movieId}
        pageId={state.pageId}
        setGenre={setGenre}
      />
    </Provider>,
    document.querySelector(`#root`)
);

