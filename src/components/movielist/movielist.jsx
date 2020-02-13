// movelist.jsx
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../moviecard/moviecard.jsx';

const emptyCard = {
  id: undefined,
  title: ``,
  preview: ``,
  genre: ``,
  description: ``,
};

class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);
    this._filmsInfo = props.filmsInfo;
    this._movieCardActivateHandler = this._movieCardActivateHandler.bind(this);
    this.state = {
      activeMovieCard: emptyCard,
    };
  }

  _movieCardActivateHandler(evt) {
    const target = evt.target;
    const filmCard = this._filmsInfo.find((filmInfo) => {
      return filmInfo.id === parseInt(target.id, 10);
    });
    this.setState({activeMovieCard: filmCard});
  }

  render() {
    return <React.Fragment>
      <div className="catalog__movies-list">
        {this._filmsInfo.map((filmInfo) => (
          <MovieCard
            movie={filmInfo}
            movieCardActivateHandler={this._movieCardActivateHandler}
            key={filmInfo.id}
          />
        ))}
      </div>
    </React.Fragment>;
  }
}

export default MovieList;

MovieList.propTypes = {
  filmsInfo: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genre: PropTypes.string,
        description: PropTypes.string,
      })
  ),
};
