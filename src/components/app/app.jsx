
// app.jsx
import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MovieCardFull from '../moviecard-full/moviecard-full.jsx';
import MovieCardDetails from '../moviecard-details/moviecard-details.jsx';
import MovieCardReviews from '../moviecard-reviews/moviecard-reviews.jsx';
import {ActionCreator} from '../../reducer.js';
import {connect} from 'react-redux';

export const idKey = `cardId`;
export const pageKey = `pageId`;

export const setCookie = (key, value) => {
  document.cookie = `${key}=${value}; `;
};

export const getCookie = (key) => {
  const cookie = document.cookie;
  let start = cookie.indexOf(`${key}=`);
  if (start === -1) {
    return `-1`;
  }
  start = cookie.indexOf(`=`, start);
  const fin = cookie.indexOf(`;`, start);
  if (fin === -1) {
    return cookie.slice(start + 1);
  }
  return cookie.slice(start + 1, fin);
};

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this._filmsFullInfo = props.filmsFullInfo;
    this._promoMovie = props.promoMovie;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderApp()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    if (this.props.movieId === -1) {
      return (
        <Main
          filmsInfo={this.props.filmsInfo}
          filmsFullInfo={this._filmsFullInfo}
          setMovieId={this.props.setMovieId}
          promoMovie={this._promoMovie}
          setPageId={this.props.setPageId}
          setGenre={this.props.setGenre}
          genre={this.props.genre}
          playButtonClickHandler={() => {}}
          listButtonClickHandler={() => {}}
        />
      );
    }
    switch (this.props.pageId) {
      case 0:
        return (
          <MovieCardFull
            movieId={this.props.movieId}
            filmsFullInfo={this._filmsFullInfo}
            setMovieCardId={this.props.setMovieId}
            setPageId={this.props.setPageId}
          />
        );
      case 1:
        return (
          <MovieCardDetails
            movieId={this.props.movieId}
            filmsFullInfo={this._filmsFullInfo}
            setMovieCardId={this.props.setMovieId}
            setPageId={this.props.setPageId}
          />
        );
      case 2:
        return (
          <MovieCardReviews
            movieId={this.props.movieId}
            filmsFullInfo={this._filmsFullInfo}
            setMovieCardId={this.props.setMovieId}
            setPageId={this.props.setPageId}
          />
        );
    }
    return null;
  }
}

App.propTypes = {
  filmsInfo: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        altPoster: PropTypes.string,
        src: PropTypes.string.isRequired,
      })
  ),
};

App.propTypes = {
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
        src: PropTypes.string.isRequired,
      })
  ),
  movieId: PropTypes.number.isRequired,
  pageId: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  setPageId: PropTypes.func.isRequired,
  setMovieId: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
};

App.propTypes = {
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

const mapStateToProps = (state) => ({
  movieId: state.movieId,
  pageId: state.pageId,
  genre: state.genre,
  filmsInfo: state.filmsInfo,
  promoMovie: state.promo,
});

const mapDispatchToProps = (dispatch) => ({
  setGenre(genre) {
    dispatch(ActionCreator.setCurrentGenre(genre));
    dispatch(ActionCreator.getFilmsInfo(genre));
  },
  setMovieId(id) {
    dispatch(ActionCreator.setMovieId(id));
  },
  setPageId(id) {
    dispatch(ActionCreator.setPageId(id));
  },
  setPromoMovie(promo) {
    dispatch(ActionCreator.setPromoMovie(promo));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
