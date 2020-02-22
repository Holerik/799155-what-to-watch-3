// main.e2e.test.js
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './moviecard.jsx';

const filmInfo = {
  id: 101,
  title: `Hostiles`,
  poster: `img/hostiles.jpg`,
  altPoster: `Hostiles poster`,
};


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should play button be pressed`, () => {
  const movieCardActivateHandler = jest.fn();
  const movieCardClickHandler = jest.fn();

  const main = shallow(
      <MovieCard
        movie={filmInfo}
        movieCardActivateHandler={movieCardActivateHandler}
        movieCardClickHandler={movieCardClickHandler}
        key={0}
      />
  );
  const image = main.find(`div.small-movie-card__image`);
  image.props().onMouseOver();
  image.props().onClick();
  expect(movieCardActivateHandler.mock.calls.length).toBe(1);
  expect(movieCardClickHandler.mock.calls.length).toBe(1);
});
