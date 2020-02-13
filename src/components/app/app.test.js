// app.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const filmsInfo = [
  {
    id: 33,
    title: `Overboard`,
    preview: `img/overboard.jpg`,
    description: `After a spoiled, wealthy yacht owner is thrown overboard and loses his memory, a mistreated employee convinces him that he is her working-class husband`,
    genre: `Comedy`,
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
