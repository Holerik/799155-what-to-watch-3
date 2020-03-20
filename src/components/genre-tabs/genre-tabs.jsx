// genre-tabs.jsx

import React from 'react';
import PropTypes from 'prop-types';

const GenreTabs = React.memo(function GenreTabs(props) {
  return (
    <React.Fragment>
      <ul className="catalog__genres-list"
        onClick={props.tabClickHandler}
        onMouseOver={props.tabMouseOverHandler}
      >
        <React.Fragment> {
          props.tabItems.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <li className= {`catalog__genres-item
                      ${props.stateItem === index ||
                      props.activeItem === index ? `catalog__genres-item--active` : ``}`}>
                  <a href={index === props.activeItem ? `#` : `#`}
                    className="catalog__genres-link">{item}</a>
                </li>
              </React.Fragment>
            );
          })
        }
        </React.Fragment>
      </ul>
    </React.Fragment>
  );
});

GenreTabs.propTypes = {
  activeItem: PropTypes.number.isRequired,
  stateItem: PropTypes.number.isRequired,
  tabClickHandler: PropTypes.func.isRequired,
  tabMouseOverHandler: PropTypes.func.isRequired,
  tabItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GenreTabs;
