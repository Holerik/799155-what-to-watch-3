// moviecard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {movie, movieCardActivateHandler, movieCardClickHandler} = props;
  return <React.Fragment>
    <article className="small-movie-card catalog__movies-card">
      <div onMouseOver={movieCardActivateHandler} id={`${movie.id }`} onClick={movieCardClickHandler} className="small-movie-card__image">
        <img src={movie.poster} alt={movie.altPoster} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title" onClick={movieCardClickHandler}>
        <a className="small-movie-card__link" href="/moviecard-full">{movie.title}</a>
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
  }),
  movieCardActivateHandler: PropTypes.func.isRequired,
  movieCardClickHandler: PropTypes.func.isRequired,
};
