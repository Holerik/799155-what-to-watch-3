// moviecard-full.jsx
import React from 'react';
import PropTypes from 'prop-types';

const MovieCardFull = (props) => {
  const {detailMovieInfo} = props;
  const getFullString = (data, delimiter) => {
    let result = ``;
    for (let item of data) {
      result += String.fromCharCode(delimiter) + item;
    }
    return result.slice(1);
  };
  const getRatingLevel = (rating) => {
    const level = [`Bad`, `Normal`, `Good`, `Very good`, `Awesome`];
    const fRating = parseFloat(rating);
    let index = 4;
    if (fRating < 10) {
      index = 3;
    }
    if (fRating < 8) {
      index = 2;
    }
    if (fRating < 5) {
      index = 1;
    }
    if (fRating < 3) {
      index = 0;
    }
    return level[index];
  };
  detailMovieInfo.rating.level = getRatingLevel(detailMovieInfo.rating.score);

  return <React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={detailMovieInfo.background} alt={detailMovieInfo.altBackground} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
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
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{detailMovieInfo.rating.score}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{detailMovieInfo.rating.level}</span>
                <span className="movie-rating__count">{`${detailMovieInfo.rating.count} ratings`}</span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>{detailMovieInfo.description}</p>

              <p>{detailMovieInfo.review}</p>

              <p className="movie-card__director"><strong>{`Director: ${detailMovieInfo.director}`}</strong></p>

              <p className="movie-card__starring"><strong>{`Starring: ${getFullString(detailMovieInfo.starring, 44)}`}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>;
};

export default MovieCardFull;

MovieCardFull.propTypes = {
  detailMovieInfo: PropTypes.shape({
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
  }),
};

