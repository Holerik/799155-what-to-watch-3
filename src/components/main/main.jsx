// main.jsx
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from '../movielist/movielist.jsx';
import Header from '../header/header.jsx';

const Main = (props) => {
  const {filmsInfo, setMovieCardId, setPageId, promoMovie} = props;
  const getFullString = (data, delimiter) => {
    let result = ``;
    for (let item of data) {
      result += String.fromCharCode(delimiter) + item;
    }
    return result.slice(1);
  };

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoMovie.background} alt={promoMovie.altBackground} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Header
          avatar={`img/avatar.jpg`}
          setMovieId={setMovieCardId}
          setPageId={setPageId}
        />
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoMovie.poster} alt={promoMovie.altPoster} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoMovie.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{getFullString(promoMovie.genre, 183)}</span>
              <span className="movie-card__year">{promoMovie.year}</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Comedies</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Crime</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Documentary</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Dramas</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Horror</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Kids & Family</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Romance</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Sci-Fi</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Thrillers</a>
        </li>
      </ul>
      <section className="catalog">
        <MovieList
          filmsInfo={filmsInfo}
          setMovieCardId={setMovieCardId}
        />
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2020 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
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
  setPageId: PropTypes.func.isRequired,
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
  )
};

Main.propTypes = {
  promoMovie: PropTypes.shape({
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
};

export default Main;
