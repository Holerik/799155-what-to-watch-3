// moviecard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {movie, movieCardActivateHandler} = props;
  return <React.Fragment>
    <article className="small-movie-card catalog__movies-card">
      <div onMouseOver={movieCardActivateHandler} id={`${movie.id }`} className="small-movie-card__image">
        <img src={movie.preview} alt={movie.description} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
      </h3>
    </article>
  </React.Fragment>;
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    genre: PropTypes.string,
    description: PropTypes.string,
  }),
  movieCardActivateHandler: PropTypes.func.isRequired,
};
