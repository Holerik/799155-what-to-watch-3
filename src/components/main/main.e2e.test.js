// main.e2e.test.js
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const filmsInfo = [
  {
    id: 204,
    title: `Bullet`,
    genre: `War Drama`,
    releaseDate: new Date(`2020-02-09T21:07:32.696Z`),
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should play button be pressed`, () => {
  const playButtonClickHandler = jest.fn();

  const main = shallow(
      <Main
        filmsInfo={filmsInfo}
        playButtonClickHandler={playButtonClickHandler}
      />
  );
  const playButton = main.find(`button.btn--play`);
  playButton.props().onClick();
  expect(playButtonClickHandler.mock.calls.length).toBe(1);
});
