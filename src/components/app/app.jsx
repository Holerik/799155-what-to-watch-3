/* eslint-disable react/prop-types */
// app.jsx
import React from 'react';
import {Main} from '../main/main.jsx';

export const App = (props) => {
  const {filmInfo} = props;
  return <React.Fragment>
    <h1>React Application</h1>
    <Main
      title={filmInfo.title}
      genre={filmInfo.genre}
      releaseDate={filmInfo.releaseDate}
    />
  </React.Fragment>;
};
