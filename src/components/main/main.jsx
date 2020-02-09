/* eslint-disable react/prop-types */
// main.jsx
import React from 'react';

export const Main = (props) => {
  const {title, genre, releaseDate} = props;
  return <React.Fragment>
    <p>Title: {title}</p>
    <p>Genre: {genre}</p>
    <p>Release date: {releaseDate}</p>
  </React.Fragment>;
};

