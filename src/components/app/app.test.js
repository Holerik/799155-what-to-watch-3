// app.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const filmsInfo = [
  {
    id: 44,
    title: `Fantomas`,
    genre: `Comedy`,
    releaseDate: new Date(`2020-02-09T21:07:32.696Z`),
  }
];

it(`<App /> should render Fantomas film card`, () => {
  const tree = renderer
    .create(<App
      filmsInfo={filmsInfo}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
