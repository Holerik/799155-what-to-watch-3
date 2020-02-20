// index.js
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import {filmsInfo, filmsFullInfo, promoMovie} from './mocks/films.js';

ReactDom.render(
    <App
      filmsInfo={filmsInfo}
      filmsFullInfo={filmsFullInfo}
      promoMovie={promoMovie}
    />,
    document.querySelector(`#root`)
);

