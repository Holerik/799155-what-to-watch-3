// movelist.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movielist.jsx';

const filmsInfo = [
  {
    id: 91,
    title: `The Commuter`,
    poster: `img/commuter.jpg`,
    altPoster: `commuter poster`,
  }
];

const setMovieCardId = () => {};

it(`<MoveList /> should render small movie cadr list`, () => {
  const tree = renderer
    .create(<MovieList
      filmsInfo={filmsInfo}
      setMovieCardId={setMovieCardId}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
