// with-video.e2e.test.js
import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Player from '../../components/video-player/video-player.jsx';
import withVideo from './with-video.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const movie = {
  id: 111,
  title: `Terminator`,
  poster: `img/terminator.jpg`,
  altPoster: `Terminator poster`,
  src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
};

it(`Should play button be pressed`, () => {
  const exitButtonClickHandler = jest.fn();
  const setFullScreen = jest.fn();

  const VideoPlayer = withVideo(Player);

  const main = mount(
      <VideoPlayer
        src={movie.src}
        isMuted={true}
        poster={movie.poster}
        width={280}
        isPlaying={true}
        exitButtonClickHandler={exitButtonClickHandler}
        setFullScreen={setFullScreen}
      />
  );
  window.HTMLMediaElement.prototype.play = () => {};
  const video = main.find(`video.player__video`);
  expect(video.length).toEqual(1);
  const {_videoRef} = main.instance();
  main.instance().componentDidMount();
  _videoRef.current.onplay();
  expect(main.state().isPlaying).toEqual(true);
});

it(`Should pause button be pressed`, () => {
  const exitButtonClickHandler = jest.fn();
  const setFullScreen = jest.fn();

  const VideoPlayer = withVideo(Player);

  const main = mount(
      <VideoPlayer
        src={movie.src}
        isMuted={true}
        poster={movie.poster}
        width={280}
        isPlaying={true}
        exitButtonClickHandler={exitButtonClickHandler}
        setFullScreen={setFullScreen}
      />
  );
  window.HTMLMediaElement.prototype.pause = () => {};
  const video = main.find(`video.player__video`);
  expect(video.length).toEqual(1);
  const {_videoRef} = main.instance();
  main.instance().componentDidMount();
  _videoRef.current.onpause();
  expect(main.state().isPaused).toEqual(true);
});
