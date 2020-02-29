// with-video.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Player from '../../components/video-player/video-player.jsx';

const withMockVideo = (Component) => {
  class WithMockVideo extends React.PureComponent {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <Component
          {...this.props}
          isPlaying={true}
          isPaused={false}
          buttonPlayerClickHandler={() => {}}
          isMuted={true}
          canPlay={true}
          progress={0}
        >
          <video />
        </Component>
      );
    }
  }
  return WithMockVideo;
};


const MockVideoPlayer = withMockVideo(Player);

it(`Should correctly render VideoPlayer`, () => {
  const tree = renderer.create(
      <MockVideoPlayer>
      </MockVideoPlayer>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

