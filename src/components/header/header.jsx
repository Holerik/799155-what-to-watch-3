// header.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {avatar} = props;
  const initIds = () => {
    props.setPageId(0);
    props.setMovieId(-1);
  };
  return <React.Fragment>
    <div className="logo">
      <a href="/" className="logo__link" onClick={initIds}>
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
  setPageId: PropTypes.func.isRequired,
  setMovieId: PropTypes.func.isRequired,
};

export default Header;
