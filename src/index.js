// index.js
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import {ALL_GENRES, reducer, selectMoviesByGenre} from './reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
      <App
        filmsInfo={selectMoviesByGenre(ALL_GENRES)}
        filmsFullInfo={selectMoviesByGenre()}
        promoMovie={{}}
        setMovieId={() => {}}
        setPageId={() => {}}
        movieId={-1}
        pageId={0}
        setGenre={() => {}}
        setPromoMovie={() => {}}
        playMovie={() => {}}
      />
    </Provider>,
    document.querySelector(`#root`)
);

