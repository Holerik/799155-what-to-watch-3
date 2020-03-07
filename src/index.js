// index.js
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import {filmsInfo, filmsFullInfo, promoMovie} from './mocks/films.js';

const state = {
  movieId: -1,
  pageId: 0,
};

const setMovieId = (movieId) => {
  state.movieId = movieId;
};

const setPageId = (pageId) => {
  state.pageId = pageId;
};

ReactDom.render(
    <App
      filmsInfo={filmsInfo}
      filmsFullInfo={filmsFullInfo}
      promoMovie={promoMovie}
      setMovieId={setMovieId}
      setPageId={setPageId}
      movieId={state.movieId}
      pageId={state.pageId}
    />,
    document.querySelector(`#root`)
);

