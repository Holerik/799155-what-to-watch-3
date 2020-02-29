// video-player.jsx
import React from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {

  render() {
    const {isPlaying, isPaused, buttonPlayerClickHandler, isMuted, canPlay, progress, children} = this.props;
    const divStyle = {
      left: `30%`,
    };

    return (
      <React.Fragment>
        <div className="player">
          {children}
          <button type="button" className={`player__exit ${isMuted ? `visually-hidden` : ``}`}>Exit</button>

          <div className={`player__controls ${isMuted ? `visually-hidden` : ``}`}>

            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={`${progress}`} max="100"></progress>
                <div className="player__toggler" style={divStyle}>Toggler</div>
              </div>
              <div className="player__time-value">1:30:29</div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play"
                disabled={!canPlay}
                onClick={() => {
                  buttonPlayerClickHandler();
                }}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  {isPaused &&
                  <use xlinkHref="#play-s"></use>
                  }
                  {isPlaying &&
                  <use xlinkHref="#pause"></use>
                  }
                </svg>
                <span>{isPlaying ? `Pause` : `Play`}</span>
              </button>
              <div className="player__name">Transpotting</div>

              <button type="button" className="player__full-screen">
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VideoPlayer;

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isPaused: PropTypes.bool.isRequired,
  buttonPlayerClickHandler: PropTypes.func.isRequired,
  isMuted: PropTypes.bool.isRequired,
  canPlay: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};
