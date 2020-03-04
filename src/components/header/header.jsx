// header.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {avatar} = props;
  return <React.Fragment>
    <div className="logo">
      <a href="main.html" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>

    <div className="user-block">
      <div className="user-block__avatar">
        <img src={avatar} alt="User avatar" width="63" height="63" />
      </div>
    </div>
  </React.Fragment>;
};

Header.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Header;
