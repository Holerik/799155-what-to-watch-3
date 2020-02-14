// movelist.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movielist.jsx';

const filmsInfo = [
  {
    id: 91,
    title: `The Commuter`,
    preview: `img/commuter.jpg`,
    description: `An Insurance Salesman/Ex-Cop is caught up in a criminal conspiracy during his daily commute home`,
    genre: `Thriller`,
  }
];

it(`<MoveList /> should render small movie cadr list`, () => {
  const tree = renderer
    .create(<MovieList
      filmsInfo={filmsInfo}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
