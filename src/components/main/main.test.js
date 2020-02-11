// main.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const filmsInfo = [
  {
    id: 404,
    title: `Terminator`,
    genre: `Fiction`,
    releaseDate: new Date(`2020-02-09T21:07:32.662Z`),
  }
];

const playButtonClickHandler = () => {};

it(`<Main /> should render Terminator film card`, () => {
  const tree = renderer
    .create(<Main
      filmsInfo={filmsInfo}
      playButtonClickHandler={playButtonClickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
