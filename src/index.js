// index.js
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import {filmsInfo} from './mocks/films.js';


ReactDom.render(
    <App
      filmsInfo={filmsInfo}
    />,
    document.getElementById(`root`)
);

