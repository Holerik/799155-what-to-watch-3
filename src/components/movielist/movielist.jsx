// movelist.jsx
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../moviecard/moviecard.jsx';

const MOVIE_CARDS_ON_PAGE = 8;
const TIME_INTERVAL = 1000; // ms

class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);
    this._setMovieCardId = props.setMovieCardId;
    this._movieCardActivateHandler = this._movieCardActivateHandler.bind(this);
    this._movieCardClickHandler = this._movieCardClickHandler.bind(this);
    this._movieCardOutHandler = this._movieCardOutHandler.bind(this);
    this.state = {
      activeMovieCard: -1,
      showIsDetailed: true,
      canPlayVideo: false,
    };
    this._movieCardFirstOnPage = 0;
    this._movieCardLastOnPage = this._movieCardFirstOnPage + MOVIE_CARDS_ON_PAGE;
    this._lastTimeOut = null;
  }

  _waitTimeInterval() {
    this.setState({canPlayVideo: true});
  }

  _getActiveFilmCard(evt) {
    const target = evt.target;
    const filmCard = this.props.filmsInfo.find((filmInfo) => {
      return filmInfo.id === parseInt(target.id, 10);
    });
    return filmCard;
  }

  _getClickedFilmCard(evt) {
    const target = evt.target;
    const filmCard = this.props.filmsInfo.find((filmInfo) => {
      return filmInfo.title === target.text;
    });
    return filmCard;
  }

  _movieCardActivateHandler(evt) {
    const filmCard = this._getActiveFilmCard(evt);
    const id = filmCard === undefined ? -1 : filmCard.id;
    this.setState({activeMovieCard: id});
    if (this._lastTimeOut) {
      clearTimeout(this._lastTimeOut);
    }
    this._lastTimeOut = setTimeout(() => {
      this._waitTimeInterval();
    }, TIME_INTERVAL);
  }

  _movieCardOutHandler() {
    this.setState({activeMovieCard: -1});
    this.setState({canPlayVideo: false});
    clearTimeout(this._lastTimeOut);
    this._lastTimeOut = null;
  }

  _movieCardClickHandler(evt) {
    evt.preventDefault();
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
        { this.props.filmsInfo.slice(this._movieCardFirstOnPage, this._movieCardLastOnPage)
          .map((filmInfo) => (
            <MovieCard
              movie={filmInfo}
              movieCardActivateHandler={this._movieCardActivateHandler}
              movieCardOutHandler={this._movieCardOutHandler}
              movieCardClickHandler={this._movieCardClickHandler}
              activeMovieId={this.state.activeMovieCard}
              canPlayVideo={this.state.canPlayVideo}
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
        src: PropTypes.string.isRequired,
      })
  ),
  setMovieCardId: PropTypes.func.isRequired,
};
