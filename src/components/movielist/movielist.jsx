// movelist.jsx
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../moviecard/moviecard.jsx';
// import MovieCardFull from '../moviecard-full/moviecard-full.jsx';

const MOVIE_CARDS_ON_PAGE = 8;

class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);
    this._filmsInfo = props.filmsInfo;
    this._setMovieCardId = props.setMovieCardId;
    this._movieCardActivateHandler = this._movieCardActivateHandler.bind(this);
    this._movieCardClickHandler = this._movieCardClickHandler.bind(this);
    this.state = {
      activeMovieCard: -1,
      showIsDetailed: true,
    };
    this._movieCardFirstOnPage = 0;
    this._movieCardLastOnPage = this._movieCardFirstOnPage + MOVIE_CARDS_ON_PAGE;
  }

  _getActiveFilmCard(evt) {
    const target = evt.target;
    const filmCard = this._filmsInfo.find((filmInfo) => {
      return filmInfo.id === parseInt(target.id, 10);
    });
    return filmCard;
  }

  _getClickedFilmCard(evt) {
    const target = evt.target;
    const filmCard = this._filmsInfo.find((filmInfo) => {
      return filmInfo.title === target.text;
    });
    return filmCard;
  }

  _movieCardActivateHandler(evt) {
    const filmCard = this._getActiveFilmCard(evt);
    this.setState({activeMovieCard: filmCard.id});
  }

  _movieCardClickHandler(evt) {
    const filmCard = this._getClickedFilmCard(evt);
    if (filmCard === undefined) {
      this._setMovieCardId(this.state.activeMovieCard);
    } else {
      this._setMovieCardId(filmCard.id);
    }
  }

  render() {
    return <React.Fragment>
      <div className="catalog__movies-list">
        { this._filmsInfo.slice(this._movieCardFirstOnPage, this._movieCardLastOnPage)
          .map((filmInfo) => (
            <MovieCard
              movie={filmInfo}
              movieCardActivateHandler={this._movieCardActivateHandler}
              movieCardClickHandler={this._movieCardClickHandler}
              key={filmInfo.id}
            />
          ))}
      </div>
    </React.Fragment>;
  }
}

export default MovieList;

MovieList.propTypes = {
  filmsInfo: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        altPoster: PropTypes.string,
      })
  ),
  filmsFullInfo: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        altPoster: PropTypes.String,
        background: PropTypes.string.isRequired,
        altBackground: PropTypes.string,
        description: PropTypes.string.isRequired,
        review: PropTypes.string.isRequired,
        genre: PropTypes.arrayOf(PropTypes.string).isRequired,
        year: PropTypes.number.isRequired,
        duration: PropTypes.string,
        age: PropTypes.string,
        rating: PropTypes.shape({
          score: PropTypes.string.isRequired,
          level: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired,
        }),
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
  ),
  setMovieCardId: PropTypes.func.isRequired,
};
