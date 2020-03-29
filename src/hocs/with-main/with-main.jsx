// with-main.jsx
import React from 'react';
import PropTypes from 'prop-types';
import {MOVIE_CARDS_ON_PAGE} from '../with-show-more/with-show-more.jsx';

const withMain = (Component) => {
  class WithMain extends React.PureComponent {
    constructor(props) {
      super(props);
      this.initState = {
        firstCard: 0,
        lastCard: props.filmsInfo.length < MOVIE_CARDS_ON_PAGE ? props.filmsInfo.length - 1 : MOVIE_CARDS_ON_PAGE - 1,
      };
      this.state = this.initState;
      this.setShowLimits = this.setShowLimits.bind(this);
      this.setGenre = this.setGenre.bind(this);
    }

    setShowLimits(limits) {
      this.setState({
        firstCard: limits.first,
        lastCard: limits.last,
      });
    }

    setGenre(genre) {
      this.props.setGenre(genre);
      this.setState(this.initState);
    }

    render() {
      const firstCard = this.state.firstCard;
      const lastCard = firstCard + MOVIE_CARDS_ON_PAGE > this.props.filmsInfo.length ?
        this.props.filmsInfo.length - 1 : firstCard + MOVIE_CARDS_ON_PAGE;
      return (
        <Component
          {...this.props}
          filmsInfo={this.props.filmsInfo}
          filmsFullInfo={this.props.filmsFullInfo}
          setMovieId={this.props.setMovieId}
          promoMovie={this.props.promoMovie}
          setPageId={this.props.setPageId}
          setGenre={this.setGenre}
          setShowLimits={this.setShowLimits}
          genre={this.props.genre}
          playButtonClickHandler={this.props.playButtonClickHandler}
          listButtonClickHandler={this.props.listButtonClickHandler}
          firstCard= {firstCard}
          lastCard={lastCard}
        >
        </Component>
      );
    }
  }

  WithMain.propTypes = {
    filmsInfo: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          poster: PropTypes.string.isRequired,
          altPoster: PropTypes.string,
          src: PropTypes.string.isRequired,
          preview: PropTypes.string.isRequired
        })
    ),
    setMovieId: PropTypes.func.isRequired,
    setPageId: PropTypes.func.isRequired,
    setGenre: PropTypes.func.isRequired,
    genre: PropTypes.string.isRequired,
    playButtonClickHandler: PropTypes.func.isRequired,
    listButtonClickHandler: PropTypes.func.isRequired,
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
          preview: PropTypes.string.isRequired,
        })
    )
  };

  WithMain.propTypes = {
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
      preview: PropTypes.string.isRequired
    }),
  };

  return WithMain;
};

export default withMain;
