// main.e2e.test.js
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './moviecard.jsx';

const filmInfo = {
  id: 101,
  title: `Hostiles`,
  preview: `img/hostiles.jpg`,
  description: `In 1892, a legendary Army Captain reluctantly agrees to escort a Cheyenne chief and his family through dangerous territory`,
  genre: `Western`,
};


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should play button be pressed`, () => {
  const movieCardActivateHandler = jest.fn();

  const main = shallow(
      <MovieCard
        movie={filmInfo}
        movieCardActivateHandler={movieCardActivateHandler}
      />
  );
  const image = main.find(`div.small-movie-card__image`);
  image.props().onMouseOver();
  expect(movieCardActivateHandler.mock.calls.length).toBe(1);
});
