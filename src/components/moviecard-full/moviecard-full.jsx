// moviecard-full.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Movies from '../movielist/movielist.jsx';
import PageTabs from '../tabs/tabs.jsx';
import withTabs from '../../hocs/with-tabs/with-tabs.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

const Tabs = withActiveItem(withTabs(PageTabs));
const MovieList = withActiveItem(Movies);

export const getFullString = (data, delimiter) => {
  let result = ``;
  for (let item of data) {
    result += String.fromCharCode(delimiter) + item;
  }
  return result.slice(1);
};

export const movieCardTabItems = [`Overview`, `Details`, `Reviews`];

export const getRatingLevel = (rating) => {
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

export const selectMoviesByGenre = (detailMovieInfo, filmsFullInfo) => {
  for (let genre of detailMovieInfo.genre) {
    const movies = filmsFullInfo.filter((movie) => {
      return (movie.id !== detailMovieInfo.id && movie.genre.findIndex((item) => {
        return item === genre;
      }) > -1);
    });
    if (movies.length > 0) {
      return movies.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          poster: movie.poster,
          altPoster: movie.altPoster,
          src: movie.src,
        };
      });
    }
  }
  return null;
};

const MovieCardFull = React.memo(function MovieCardFull(props) {
  const detailMovieInfo = props.filmsFullInfo.find((movie) => {
    return movie.id === props.movieId;
  });
  detailMovieInfo.rating.level = getRatingLevel(detailMovieInfo.rating.score);
  const selectedMovies = selectMoviesByGenre(detailMovieInfo, props.filmsFullInfo);


  return (<React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={detailMovieInfo.background} alt={detailMovieInfo.altBackground} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Header
            avatar={`img/avatar.jpg`}
            setPageId={props.setPageId}
            setMovieId={props.setMovieCardId}
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
              activeItem={0}
              mouseClickHandler={props.setPageId}
              tabItems={movieCardTabItems}
            />}
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
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div>
          <MovieList
            activeItem={-1}
            tabItems={selectedMovies}
            mouseClickHandler={props.setMovieCardId}
          />
        </div>
      </section>

      <footer className="page-footer">
        <Footer
          setPageId={props.setPageId}
          setMovieId={props.setMovieCardId}
        />
      </footer>
    </div>
  </React.Fragment>);
});

export default MovieCardFull;

MovieCardFull.propTypes = {
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

