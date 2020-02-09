// index.js
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';

const filmsInfo = [
  {
    id: 0,
    title: `Fantastic Beasts`,
    genre: `Fantasy`,
    releaseDate: new Date(),
  },
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genre: `Drama`,
    releaseDate: new Date(),
  },
  {
    id: 2,
    title: `Macbeth`,
    genre: `History`,
    releaseDate: new Date(),
  }
];

ReactDom.render(
    <App
      filmsInfo={filmsInfo}
    />,
    document.getElementById(`root`)
);

