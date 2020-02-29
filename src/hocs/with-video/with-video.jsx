// with-video.jsx
import React from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        progress: 0,
        isPlaying: false,
        isPaused: true,
        canPlay: false,
        isMuted: props.isMuted,
      };
      this._videoRef = React.createRef();
    }

    _muteHandler() {
      this.setState((prevState) => (this.setState({isMuted: !prevState.isMuted})));
      const video = this._videoRef.current;
      video.muted = this.state.isMuted;
    }

    componentDidMount() {
      const {src} = this.props;
      const video = this._videoRef.current;
      video.src = src;

      video.oncanplaythrough = () => {
        this.setState({canPlay: true});
      };

      video.onplay = () => {
        this.setState({isPlaying: true});
        this.setState({isPaused: false});
      };

      video.oncanplay = () => {
        this.setState({canPlay: true});
      };

      video.onpause = () => {
        this.setState({isPlaying: false});
        this.setState({isPaused: true});
      };

      video.ontimeupdate = () => {
        this.setState({progress: video.currentTime});
      };
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.onplay = null;
      video.onpause = null;
      video.oncanplay = null;
      video.oncanplaythrough = null;
      video.ontimeupdate = null;
      video.src = ``;
    }

    render() {
      const {playButtonClickHandler, pauseButtonClickHandler} = this.props;
      const buttonPlayerClickHandler = () => {
        if (this.state.isPlaying) {
          pauseButtonClickHandler();
        } else {
          playButtonClickHandler();
        }
        this.setState({isPlaying: !this.state.isPlaying});
      };

      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          isPaused={this.state.isPaused}
          buttonPlayerClickHandler={buttonPlayerClickHandler}
          isMuted={this.props.isMuted}
          canPlay={this.state.canPlay}
          progress={this.state.progress}
        >
          <video className="player__video" ref={this._videoRef}
            poster={this.props.poster} muted={this.state.isMuted}
            width={this.props.width}>
            <source src={this.props.src}/>
          </video>
        </Component>
      );
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      if (this.props.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }
  }

  WithVideo.propTypes = {
    src: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    playButtonClickHandler: PropTypes.func.isRequired,
    pauseButtonClickHandler: PropTypes.func.isRequired,
    poster: PropTypes.string.isRequired,
    isMuted: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired,
  };
  return WithVideo;
};

export default withVideo;
