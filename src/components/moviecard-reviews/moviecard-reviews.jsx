// moviecard-reviews.jsx
import React from 'react';
import PropTypes from 'prop-types';
import {getFullString, selectMoviesByGenre, getRatingLevel, movieCardTabItems} from '../moviecard-full/moviecard-full.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Movies from '../movielist/movielist.jsx';
import Review from '../review/review.jsx';
import {reviewsInfo} from '../../mocks/reviews.js';
import PageTabs from '../tabs/tabs.jsx';
import withTabs from '../../hocs/with-tabs/with-tabs.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

const Tabs = withActiveItem(withTabs(PageTabs));
const MovieList = withActiveItem(Movies);

const addReviewItems = (detailedMovieInfo) => {
  return (
    <React.Fragment>
      {
        detailedMovieInfo.reviews.map((id) => {
          return (
            <React.Fragment key={id}>
              <Review review={reviewsInfo.find((item) => item.id === id)}/>
            </React.Fragment>
          );
        })
      }
    </React.Fragment>
  );
};

const MovieCardReviews = React.memo(function MovieCardReviews(props) {
  const detailedMovieInfo = props.filmsFullInfo.find((movie) => {
    return movie.id === props.movieId;
  });
  detailedMovieInfo.rating.level = getRatingLevel(detailedMovieInfo.rating.score);
  const selectedMovies = selectMoviesByGenre(detailedMovieInfo, props.filmsFullInfo);

  return (<React.Fragment>

    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={detailedMovieInfo.background} alt={detailedMovieInfo.altBackground}/>
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
            <h2 className="movie-card__title">{detailedMovieInfo.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{getFullString(detailedMovieInfo.genre, 183)}</span>
              <span className="movie-card__year">{detailedMovieInfo.year}</span>
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
            <img src={detailedMovieInfo.poster} alt={detailedMovieInfo.altPoster} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            {<Tabs
              activeItem={2}
              mouseClickHandler={props.setPageId}
              tabItems={movieCardTabItems}
            />}
            <div className="movie-card__reviews movie-card__row">
              <div className="movie-card__reviews-col">
                {addReviewItems(detailedMovieInfo)}
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


export default MovieCardReviews;

MovieCardReviews.propTypes = {
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  setMovieCardId: PropTypes.func.isRequired,
  setPageId: PropTypes.func.isRequired,
};
