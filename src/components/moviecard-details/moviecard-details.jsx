// moviecard-details.jsx
import React from 'react';
import PropTypes from 'prop-types';
import {getFullString, selectMoviesByGenre, getRatingLevel} from '../moviecard-full/moviecard-full.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import MovieList from '../movielist/movielist.jsx';
import Tabs from '../tabs/tabs.jsx';

const setStarringList = (stars) => {
  return (
    <React.Fragment>
      {
        stars.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item} <br />
            </React.Fragment>

          );
        })
      }
    </React.Fragment>
  );
};

class MovieCardDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this._filmsFullInfo = props.filmsFullInfo;
    this._movieId = props.movieId;
    this.setMovieCardId = props.setMovieCardId;
    this.setPageId = props.setPageId;
  }

  render() {
    const detailMovieInfo = this._filmsFullInfo.find((movie) => {
      return movie.id === this.props.movieId;
    });
    detailMovieInfo.rating.level = getRatingLevel(detailMovieInfo.rating.score);
    const selectedMovies = selectMoviesByGenre(detailMovieInfo, this._filmsFullInfo);
    return <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={detailMovieInfo.background} alt={detailMovieInfo.altBackground}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Header
              avatar={`img/avatar.jpg`}
              setPageId={this.setPageId}
              setMovieId={this.setMovieCardId}
            />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{detailMovieInfo.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{getFullString(detailMovieInfo.genre, 183)}</span>
                <span className="movie-card__year">{detailMovieInfo.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={detailMovieInfo.poster} alt={detailMovieInfo.altPoster} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              {<Tabs
                activeItem={1}
                setPageId={this.setPageId}
              />}
              <div className="movie-card__text movie-card__row">
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">{detailMovieInfo.director}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">
                      {setStarringList(detailMovieInfo.starring)}
                    </span>
                  </p>
                </div>

                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{detailMovieInfo.duration}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">{getFullString(detailMovieInfo.genre, 183)}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">{detailMovieInfo.year}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div>
            <MovieList
              filmsInfo={selectedMovies}
              setMovieCardId={this.setMovieCardId}
            />
          </div>
        </section>

        <footer className="page-footer">
          <Footer
            setPageId={this.setPageId}
            setMovieId={this.setMovieCardId}
          />
        </footer>
      </div>
    </React.Fragment>;
  }
}

export default MovieCardDetails;

MovieCardDetails.propTypes = {
  movieId: PropTypes.number.isRequired,
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
        reviews: PropTypes.arrayOf(PropTypes.number),
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
        src: PropTypes.string.isRequired,
      })
  ),
  setMovieCardId: PropTypes.func.isRequired,
  setPageId: PropTypes.func.isRequired,
};
