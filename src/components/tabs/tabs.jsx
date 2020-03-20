// tabs.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Tabs = React.memo(function Tabs(props) {
  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list"
          onClick={props.tabClickHandler}
          onMouseOver={props.tabMouseOverHandler}
        >
          <React.Fragment> {
            props.tabItems.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <li className= {`movie-nav__item
                        ${props.stateItem === index ||
                        props.activeItem === index ? `movie-nav__item--active` : ``}`}>
                    <a href={index === props.activeItem ? `#` : `#`}
                      className="movie-nav__link">{item}</a>
                  </li>
                </React.Fragment>
              );
            })
          }
          </React.Fragment>
        </ul>
      </nav>
    </React.Fragment>
  );
});

Tabs.propTypes = {
  activeItem: PropTypes.number.isRequired,
  stateItem: PropTypes.number.isRequired,
  tabClickHandler: PropTypes.func.isRequired,
  tabMouseOverHandler: PropTypes.func.isRequired,
  tabItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tabs;
