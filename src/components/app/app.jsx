
// app.jsx
import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MovieCardFull from '../moviecard-full/moviecard-full.jsx';
import MovieCardDetails from '../moviecard-details/moviecard-details.jsx';
import MovieCardReviews from '../moviecard-reviews/moviecard-reviews.jsx';

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
    this._filmsInfo = props.filmsInfo;
    this._filmsFullInfo = props.filmsFullInfo;
    this._promoMovie = props.promoMovie;
    this._setMovieCardId = this._setMovieCardId.bind(this);
    this._setPageId = this._setPageId.bind(this);
    this.state = {
      cardId: props.movieId,
      pageId: props.pageId,
    };
  }

  _setMovieCardId(id) {
    this.setState({cardId: id});
    this.props.setMovieId(id);
  }

  _setPageId(id) {
    this.setState({pageId: id});
    this.props.setPageId(id);
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
    if (this.state.cardId === -1) {
      return (
        <Main
          filmsInfo={this._filmsInfo}
          filmsFullInfo={this._filmsFullInfo}
          setMovieCardId={this._setMovieCardId}
          promoMovie={this._promoMovie}
          setPageId={this._setPageId}
        />
      );
    }
    if (this.state.pageId === 0) {
      return (
        <MovieCardFull
          movieId={this.state.cardId}
          filmsFullInfo={this._filmsFullInfo}
          setMovieCardId={this._setMovieCardId}
          setPageId={this._setPageId}
        />
      );
    }
    if (this.state.pageId === 1) {
      return (
        <MovieCardDetails
          movieId={this.state.cardId}
          filmsFullInfo={this._filmsFullInfo}
          setMovieCardId={this._setMovieCardId}
          setPageId={this._setPageId}
        />
      );
    }
    if (this.state.pageId === 2) {
      return (
        <MovieCardReviews
          movieId={this.state.cardId}
          filmsFullInfo={this._filmsFullInfo}
          setMovieCardId={this._setMovieCardId}
          setPageId={this._setPageId}
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
  )
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
  movieId: PropTypes.number.isRequired,
  pageId: PropTypes.number.isRequired,
  setPageId: PropTypes.func.isRequired,
  setMovieId: PropTypes.func.isRequired,
};

export default App;
