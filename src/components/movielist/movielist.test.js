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
    src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
    preview: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
  }
];

const mouseClickHandler = jest.fn();
const setActiveItem = () => {};

it(`<MoveList /> should render small movie cadr list`, () => {
  const tree = renderer
    .create(<MovieList
      tabItems={filmsInfo}
      stateItem={0}
      setActiveItem={setActiveItem}
      mouseClickHandler={mouseClickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
