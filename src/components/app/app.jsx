
// app.jsx
import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {filmsInfo} = props;
  return <React.Fragment>
    <Main
      filmsInfo={filmsInfo}
    />
  </React.Fragment>;
};

App.propTypes = {
  filmsInfo: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genre: PropTypes.string,
        description: PropTypes.string,
      })
  )
};

export default App;
