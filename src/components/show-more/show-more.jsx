// show-more.jsx
import React from 'react';
import PropTypes from 'prop-types';

export const MOVIE_CARDS_ON_PAGE = 8;

class ShowMore extends React.PureComponent {
  constructor(props) {
    super(props);
    this.showMoreClickHandle = this.showMoreClickHandle.bind(this);
    this.state = {
      firstCard: 0,
      lastCard: props.filmsCount > MOVIE_CARDS_ON_PAGE ? MOVIE_CARDS_ON_PAGE - 1 : props.filmsCount - 1,
    };
  }

  showMoreClickHandle() {
    const maxCardNumber = this.props.filmsCount - 1;
    const first = this.state.firstCard + MOVIE_CARDS_ON_PAGE < maxCardNumber ?
      this.state.firstCard + MOVIE_CARDS_ON_PAGE : maxCardNumber;
    const last = first + MOVIE_CARDS_ON_PAGE < maxCardNumber ?
      first + MOVIE_CARDS_ON_PAGE : maxCardNumber;
    this.setState({
      firstCard: first,
      lastCard: last,
    });
    this.props.setShowLimits({
      first,
      last,
    });
  }

  render() {
    return <React.Fragment>
      <div className="catalog__more">
        <button className={`catalog__button ${this.props.lastCard + 1 < this.props.filmsCount ? `` : `visually-hidden`}`}
          type="button" onClick={this.showMoreClickHandle}>Show more</button>
      </div>
    </React.Fragment>;
  }
}

export default ShowMore;

ShowMore.propTypes = {
  filmsCount: PropTypes.number.isRequired,
  setShowLimits: PropTypes.func.isRequired,
  lastCard: PropTypes.number.isRequired,
};
