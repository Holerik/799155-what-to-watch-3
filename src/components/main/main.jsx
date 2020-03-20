// main.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Movies from '../movielist/movielist.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Tabs from '../genre-tabs/genre-tabs.jsx';
import {ALL_GENRES} from '../../reducer.js';
import ShowMore from '../show-more/show-more.jsx';
import withShowMore from '../../hocs/with-show-more/with-show-more.jsx';
import withTabs from '../../hocs/with-tabs/with-tabs.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

const MAX_GENRES_COUNT = 10;
const GenreTabs = withActiveItem(withTabs(Tabs));
const MovieList = withActiveItem(Movies);
const ShowMoreButton = withShowMore(ShowMore);

const getFullString = (data, delimiter) => {
  let result = ``;
  for (let item of data) {
    result += String.fromCharCode(delimiter) + item;
  }
  return result.slice(1);
};

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.genres = [ALL_GENRES];
    for (let movie of this.props.filmsFullInfo) {
      this.genres = this.genres.concat(movie.genre.filter((item) => {
        return this.genres.indexOf(item) === -1;
      }));
    }
    this.genres = this.genres.slice(0, MAX_GENRES_COUNT);
    this._genreTabsClickHandler = this._genreTabsClickHandler.bind(this);
  }

  _genreTabsClickHandler(id) {
    const genre = this.genres[id];
    this.props.setGenre(genre);
  }
  render() {
    const activeItem = this.genres.indexOf(this.props.genre);

    return <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={this.props.promoMovie.background} alt={this.props.promoMovie.altBackground} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Header
            avatar={`img/avatar.jpg`}
            setMovieId={this.props.setMovieId}
            setPageId={this.props.setPageId}
          />
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={this.props.promoMovie.poster} alt={this.props.promoMovie.altPoster} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{this.props.promoMovie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{getFullString(this.props.promoMovie.genre, 183)}</span>
                <span className="movie-card__year">{this.props.promoMovie.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button"
                  onClick={this.props.playButtonClickHandler}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button"
                  onClick={this.props.listButtonClickHandler}
                >
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

        {<GenreTabs
          activeItem={activeItem}
          mouseClickHandler={this._genreTabsClickHandler}
          tabItems={this.genres}
        />}

        <section className="catalog">
          <MovieList
            activeItem={-1}
            tabItems={this.props.filmsInfo.slice(this.props.firstCard, this.props.lastCard + 1)}
            mouseClickHandler={this.props.setMovieId}
          />
          {<ShowMoreButton
            filmsCount={this.props.filmsInfo.length}
            setShowLimits={this.props.setShowLimits}
            lastCard={this.props.lastCard}
          />}
        </section>
        <footer className="page-footer">
          <Footer
            setPageId={this.props.setPageId}
            setMovieId={this.props.setMovieId}
          />
        </footer>
      </div>
    </React.Fragment>;
  }
}

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
  setMovieId: PropTypes.func.isRequired,
  setPageId: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  setShowLimits: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  playButtonClickHandler: PropTypes.func.isRequired,
  listButtonClickHandler: PropTypes.func.isRequired,
  firstCard: PropTypes.number.isRequired,
  lastCard: PropTypes.number.isRequired,
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
  }),
};

export default Main;
