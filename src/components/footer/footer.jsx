// footer.jsx
import React from 'react';

const Footer = () => {
  return <React.Fragment>
    <div className="logo">
      <a href="main.html" className="logo__link logo__link--light">
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


export default Footer;

