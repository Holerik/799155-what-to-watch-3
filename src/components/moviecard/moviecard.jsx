// moviecard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Player from '../video-player/video-player.jsx';
import withVideo from '../../hocs/with-video/with-video.jsx';

const VideoPlayer = withVideo(Player);

const MovieCard = (props) => {
  const {movie, movieCardActivateHandler, movieCardOutHandler,
    movieCardClickHandler, activeMovieId, canPlayVideo} = props;
  if (canPlayVideo && movie.id === activeMovieId) {
    return <React.Fragment>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image" onMouseOut={movieCardOutHandler}>
          {
            <VideoPlayer
              src={movie.preview}
              isMuted={true}
              poster={movie.poster}
              width={280}
              isPlaying={true}
              exitButtonClickHandler={() => {}}
              setFullScreen={() => {}}
            />
          }
        </div>
      </article>
    </React.Fragment>;
  }
  return <React.Fragment>
    <article className="small-movie-card catalog__movies-card">
      <div onMouseOver={movieCardActivateHandler} onMouseOut={movieCardOutHandler}
        id={`${movie.id }`} onClick={movieCardClickHandler} className="small-movie-card__image">
        <img src={movie.poster} alt={movie.altPoster} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title" onClick={movieCardClickHandler}>
        <a className="small-movie-card__link" href="#">{movie.title}</a>
      </h3>
    </article>
  </React.Fragment>;
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    altPoster: PropTypes.string,
    src: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  movieCardActivateHandler: PropTypes.func.isRequired,
  movieCardClickHandler: PropTypes.func.isRequired,
  movieCardOutHandler: PropTypes.func.isRequired,
  activeMovieId: PropTypes.number.isRequired,
  canPlayVideo: PropTypes.bool.isRequired,
};
