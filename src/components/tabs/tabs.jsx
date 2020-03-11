// tabs.jsx
import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this._setActiveItem = props.setPageId;
    this._movieTabMouseOverHandler = this._movieTabMouseOverHandler.bind(this);
    this._movieTabClickHandler = this._movieTabClickHandler.bind(this);
    this._tabItems = props.tabItems;
    this.state = {
      activeItem: props.activeItem,
    };
  }

  _addTabs() {
    return (
      <React.Fragment>
        {
          this._tabItems.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <li className= {`movie-nav__item
                    ${this.state.activeItem === index || this.props.activeItem === index ? `movie-nav__item--active` : ``}`}>
                  <a href={index === this.props.activeItem ? `#` : `#`}
                    className="movie-nav__link">{item}</a>
                </li>
              </React.Fragment>
            );
          })
        }
      </React.Fragment>
    );
  }

  _movieTabMouseOverHandler(evt) {
    const index = this._tabItems.findIndex((item) => {
      return item === evt.target.text;
    });
    this.setState({activeItem: index});
  }

  _movieTabClickHandler() {
    this._setActiveItem(this.state.activeItem);
  }

  render() {
    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list"
            onClick={this._movieTabClickHandler}
            onMouseOver={this._movieTabMouseOverHandler}
          >
            {this._addTabs()}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

Tabs.propTypes = {
  activeItem: PropTypes.number.isRequired,
  setPageId: PropTypes.func.isRequired,
  tabItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tabs;
