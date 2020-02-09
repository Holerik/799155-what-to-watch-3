// index.js
import React from 'react';
import ReactDom from 'react-dom';
import {App} from './components/app/app.jsx';

const filmInfo = {
  title: `Romeo and Juliette`,
  genre: `Drama`,
  releaseDate: (new Date()).toISOString(),
};

ReactDom.render(
    <App
      filmInfo={filmInfo}
    />,
    document.getElementById(`root`)
);

