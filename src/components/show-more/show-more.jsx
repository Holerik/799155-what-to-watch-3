// show-more.jsx
import React from 'react';
import PropTypes from 'prop-types';

class ShowMore extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <React.Fragment>
      <div className="catalog__more">
        <button className={`catalog__button ${this.props.lastCard + 1 < this.props.filmsCount ? `` : `visually-hidden`}`}
          type="button" onClick={this.props.showMoreClickHandler}>Show more</button>
      </div>
    </React.Fragment>;
  }
}

export default ShowMore;

ShowMore.propTypes = {
  filmsCount: PropTypes.number.isRequired,
  showMoreClickHandler: PropTypes.func.isRequired,
  lastCard: PropTypes.number.isRequired,
};
