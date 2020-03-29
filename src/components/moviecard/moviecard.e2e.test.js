// moviecard.e2e.test.js
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './moviecard.jsx';

const filmInfo = {
  id: 101,
  title: `Hostiles`,
  poster: `img/hostiles.jpg`,
  altPoster: `Hostiles poster`,
  src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
  preview: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
};


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should check card is active`, () => {
  const movieCardActivateHandler = jest.fn();
  const movieCardClickHandler = jest.fn();
  const movieCardOutHandler = jest.fn();

  const main = shallow(
      <MovieCard
        movie={filmInfo}
        movieCardActivateHandler={movieCardActivateHandler}
        movieCardOutHandler={movieCardOutHandler}
        movieCardClickHandler={movieCardClickHandler}
        canPlayVideo={false}
        activeMovieId={0}
        key={0}
      />
  );
  const image = main.find(`div.small-movie-card__image`);
  image.props().onMouseOver();
  image.props().onClick();
  expect(movieCardActivateHandler.mock.calls.length).toBe(1);
  expect(movieCardClickHandler.mock.calls.length).toBe(1);
  expect(movieCardOutHandler.mock.calls.length).toBe(0);
});
