// genre-tabs.jsx

import React from 'react';
import Tabs from '../tabs/tabs.jsx';
import PropTypes from 'prop-types';


class GenreTabs extends Tabs {
  constructor(props) {
    super(props);
    this._setGenre = props.setGenre;
  }

  _movieTabClickHandler() {
    this._setGenre(this._tabItems[this.state.activeItem]);
  }

  _addTabs() {
    return (
      <React.Fragment>
        {
          this._tabItems.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <li className= {`catalog__genres-item
                    ${this.state.activeItem === index ||
                    this.props.activeItem === index ? `catalog__genres-item--active` : ``}`}>
                  <a href={index === this.props.activeItem ? `#` : `#`}
                    className="catalog__genres-link">{item}</a>
                </li>
              </React.Fragment>
            );
          })
        }
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <ul className="catalog__genres-list"
          onClick={this._movieTabClickHandler}
          onMouseOver={this._movieTabMouseOverHandler}
        >
          {this._addTabs()}
        </ul>
      </React.Fragment>
    );
  }
}

export default GenreTabs;

GenreTabs.propTypes = {
  setGenre: PropTypes.func.isRequired,
};
