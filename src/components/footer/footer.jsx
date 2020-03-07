// footer.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const initIds = () => {
    props.setPageId(0);
    props.setMovieId(-1);
  };
  return <React.Fragment>
    <div className="logo">
      <a href="/" className="logo__link logo__link--light" onClick={initIds}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>

    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </React.Fragment>;
};

Footer.propTypes = {
  setPageId: PropTypes.func.isRequired,
  setMovieId: PropTypes.func.isRequired,
};

export default Footer;

