// with-video.jsx
import React from 'react';
import PropTypes from 'prop-types';

const formatDuration = (duration) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - hours * 3600) / 60);
  const secs = Math.floor(duration - hours * 3600 - minutes * 60);
  const time = `${hours}:${minutes}:${secs}`;
  return time;
};

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
        duration: ``,
      };
      this._videoRef = React.createRef();
      this.buttonPlayerClickHandler = this.buttonPlayerClickHandler.bind(this);
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
      video.autoplay = false;

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
        this.setState({progress: Math.floor((video.currentTime * 100) / video.duration)});
        const time = formatDuration(video.duration) + `/` +
        formatDuration(video.duration - video.currentTime);
        this.setState({duration: time});
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
      this._videoRef = null;
    }

    buttonPlayerClickHandler(evt) {
      evt.preventDefault();
      const video = this._videoRef.current;
      if (this.state.isPlaying) {
        this.setState({isPlaying: false});
        video.playbackRate = 0;
      } else {
        this.setState({isPlaying: true});
        video.playbackRate = 1;
      }
    }

    render() {

      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          isPaused={this.state.isPaused}
          buttonPlayerClickHandler={this.buttonPlayerClickHandler}
          buttonExitClickHandler={this.props.exitButtonClickHandler}
          buttonFullScreenHandler={this.props.setFullScreen}
          isMuted={this.props.isMuted}
          canPlay={this.state.canPlay}
          progress={this.state.progress}
          duration={this.state.duration}
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
    exitButtonClickHandler: PropTypes.func.isRequired,
    setFullScreen: PropTypes.func.isRequired,
    poster: PropTypes.string.isRequired,
    isMuted: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired,
  };
  return WithVideo;
};

export default withVideo;
