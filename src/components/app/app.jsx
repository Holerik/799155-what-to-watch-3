
// app.jsx
import React from 'react';
import MainPage from '../main/main.jsx';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MovieCardFull from '../moviecard-full/moviecard-full.jsx';
import MovieCardDetails from '../moviecard-details/moviecard-details.jsx';
import MovieCardReviews from '../moviecard-reviews/moviecard-reviews.jsx';
import {ActionCreator as DataCreator} from '../../reducer/data/data.js';
import {ActionCreator} from '../../reducer/wtw/wtw.js';
import {Operation as UserOperation, AuthorizationStatus} from '../../reducer/user/user.js';
import {connect} from 'react-redux';
import withMain from '../../hocs/with-main/with-main.jsx';
import Player from '../video-player/video-player.jsx';
import withVideo from '../../hocs/with-video/with-video.jsx';
import {promoMovie as promoFilm} from '../../mocks/films.js';
import {getGenre, getFilmsFullInfo, getFilmsByGenre} from '../../reducer/data/selectors.js';
import {getMovieId, getPageId, getMovie} from '../../reducer/wtw/selectors.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import SignIn from '../sign-in/sign-in.jsx';

const Main = withMain(MainPage);
const VideoPlayer = withVideo(Player);

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.playButtonClickHandler = this.playButtonClickHandler.bind(this);
    this.stopMoviePlay = this.stopMoviePlay.bind(this);
    this.onSignInHandler = this.onSignInHandler.bind(this);
  }

  onSignInHandler(data) {
    this.props.login(data);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderApp()}
          </Route>
          <Route exact path='/signin'>
            <SignIn
              onSubmit={this.onSignInHandler}
              setMovieId={this.props.setMovieId}
              setPageId={this.props.setPageId}
              authorizationStatus={this.props.authorizationStatus}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  playButtonClickHandler() {
    if (this.props.movieId === -1) {
      this.props.playMovie({
        id: this.props.promoMovie.id,
        title: this.props.promoMovie.title,
        poster: this.props.promoMovie.poster,
        altPoster: this.props.promoMovie.altPoster,
        src: this.props.promoMovie.src,
        preview: this.props.promoMovie.preview,
      });
    } else {
      const movie = this.props.filmsFullInfo.find((info) => {
        return info.id === this.props.movieId;
      });
      this.props.playMovie({
        id: movie.id,
        title: movie.title,
        poster: movie.poster,
        altPoster: movie.altPoster,
        src: movie.src,
        preview: movie.preview,
      });
    }
  }

  stopMoviePlay() {
    this.props.playMovie(undefined);
  }

  setFullScreen(evt) {
    evt.preventDefault();
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  _renderApp() {
    if (this.props.movie !== undefined) {
      return (
        <VideoPlayer
          src={this.props.movie.src}
          isMuted={false}
          poster={this.props.movie.poster}
          width={480}
          isPlaying={true}
          exitButtonClickHandler={this.stopMoviePlay}
          setFullScreen={this.setFullScreen}
        />
      );
    }
    if (this.props.movieId === -1) {
      return (
        <Main
          filmsInfo={this.props.filmsInfo}
          filmsFullInfo={this.props.filmsFullInfo}
          setMovieId={this.props.setMovieId}
          promoMovie={this.props.promoMovie}
          setPageId={this.props.setPageId}
          setGenre={this.props.setGenre}
          genre={this.props.genre}
          playButtonClickHandler={this.playButtonClickHandler}
          listButtonClickHandler={() => {}}
          authorizationStatus={this.props.authorizationStatus}
        />
      );
    }
    switch (this.props.pageId) {
      case 0:
        return (
          <MovieCardFull
            movieId={this.props.movieId}
            filmsFullInfo={this.props.filmsFullInfo}
            setMovieCardId={this.props.setMovieId}
            setPageId={this.props.setPageId}
            playButtonClickHandler={this.playButtonClickHandler}
            listButtonClickHandler={() => {}}
          />
        );
      case 1:
        return (
          <MovieCardDetails
            movieId={this.props.movieId}
            filmsFullInfo={this.props.filmsFullInfo}
            setMovieCardId={this.props.setMovieId}
            setPageId={this.props.setPageId}
            playButtonClickHandler={this.playButtonClickHandler}
            listButtonClickHandler={() => {}}
          />
        );
      case 2:
        return (
          <MovieCardReviews
            movieId={this.props.movieId}
            filmsFullInfo={this.props.filmsFullInfo}
            setMovieCardId={this.props.setMovieId}
            setPageId={this.props.setPageId}
            playButtonClickHandler={this.playButtonClickHandler}
            listButtonClickHandler={() => {}}
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
        preview: PropTypes.string.isRequired,
      })
  ),
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    altPoster: PropTypes.string,
    src: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
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
        preview: PropTypes.string.isRequired,
      })
  ),
  movieId: PropTypes.number.isRequired,
  pageId: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  setPageId: PropTypes.func.isRequired,
  setMovieId: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  playMovie: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
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
    preview: PropTypes.string.isRequired,
  }),
  authorizationStatus: PropTypes.oneOf([
    AuthorizationStatus.AUTH,
    AuthorizationStatus.NO_AUTH
  ]),
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  movieId: getMovieId(state),
  pageId: getPageId(state),
  genre: getGenre(state),
  filmsFullInfo: getFilmsFullInfo(state),
  filmsInfo: getFilmsByGenre(state),
  promoMovie: promoFilm, // state.DATA.promo,
  movie: getMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  setMovieId(id) {
    dispatch(ActionCreator.setMovieId(id));
  },
  setPageId(id) {
    dispatch(ActionCreator.setPageId(id));
  },
  setPromoMovie(promo) {
    dispatch(DataCreator.setPromoMovie(promo));
  },
  playMovie(movie) {
    dispatch(ActionCreator.playMovie(movie));
  },
  loadMovies(movies) {
    dispatch(DataCreator.loadMovies(movies));
  },
  setGenre(genre) {
    dispatch(DataCreator.setGenre(genre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
