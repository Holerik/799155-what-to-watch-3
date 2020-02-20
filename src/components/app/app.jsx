
// app.jsx
import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MovieCardFull from '../moviecard-full/moviecard-full.jsx';

const idKey = `cardId`;

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this._filmsInfo = props.filmsInfo;
    this._filmsFullInfo = props.filmsFullInfo;
    this._promoMovie = props.promoMovie;
    this._setMovieCardId = this._setMovieCardId.bind(this);
    this.state = {
      cardId: -1,
    };
  }

  _setCookie(key, value) {
    document.cookie = `${key}=${value}; `;
  }

  _getCookie(key) {
    const cookie = document.cookie;
    let start = cookie.indexOf(`${key}=`);
    start = cookie.indexOf(`=`, start);
    const fin = cookie.indexOf(`;`, start);
    if (fin === -1) {
      return cookie.slice(start + 1);
    }
    return cookie.slice(start + 1, fin);
  }

  _setMovieCardId(id) {
    this.setState({cardId: id});
    this._setCookie(idKey, id);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderApp()}
          </Route>
          <Route path='/moviecard-full'>
            <MovieCardFull
              detailMovieInfo={this._filmsFullInfo[parseInt(this._getCookie(idKey), 10)]}
            />
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
        />
      );
    }
    return (
      <MovieCardFull
        detailMovieInfo={this._filmsFullInfo[this.state.cardId]}
      />
    );
  }
}

App.propTypes = {
  filmsInfo: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        altPoster: PropTypes.string,
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
};

export default App;
