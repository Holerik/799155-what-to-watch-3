// video-player.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

const buttonPlayerClickHandler = () => {};

it(`<VideoPlayer /> should rendered corretly`, () => {
  const tree = renderer
    .create(<VideoPlayer
      isPlaying={true}
      isPaused={false}
      buttonPlayerClickHandler={buttonPlayerClickHandler}
      isMuted={true}
      canPlay={true}
      progress={0}
    />
    );
  expect(tree.toJSON()).toMatchSnapshot();
});
