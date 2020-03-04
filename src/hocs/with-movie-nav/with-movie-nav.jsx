// with-movie-nav.jsx
import React from 'react';
import PropTypes from 'prop-types';

const withMovieNav = (Component) => {
  class WithMovieNav extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: props.activeItem,
      };
      this._videoRef = React.createRef();
      this._navItems = [`Overview`, `Details`, `Reviews`];
      this._hrevs = [`/moviecard-full`, `/moviecard-details`, `/moviecard-reviews`];
      this._movieNavListClickHandler = this._movieNavListClickHandler.bind(this);
    }

    _movieNavListClickHandler(evt) {
      const index = this._navItems.findIndex((item) => {
        return item === evt.target.text;
      });
      this.setState({activeItem: index});
    }

    _addNaviItems() {
      return (
        <React.Fragment>
          {
            this._navItems.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <li className= {`movie-nav__item
                  ${this.state.activeItem === index || this.props.activeItem === index ? `movie-nav__item--active` : ``}`}>
                    <a href={index === this.props.activeItem ? `#` : `${this._hrevs[index]}`}
                      className="movie-nav__link">{this._navItems[index]}</a>
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
        <Component {...this.props}>
          <nav className="movie-nav movie-card__nav">
            <ul className="movie-nav__list"
              onClick={this._movieNavListClickHandler}
              onMouseOver={this._movieNavListClickHandler}
            >
              {this._addNaviItems()}
            </ul>
          </nav>
        </Component>
      );
    }
  }

  WithMovieNav.propTypes = {
    activeItem: PropTypes.number.isRequired,
  };

  return WithMovieNav;
};

export default withMovieNav;
