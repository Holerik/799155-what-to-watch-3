
// app.jsx
import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {filmsInfo} = props;
  return <React.Fragment>
    <h1>React Application</h1>
    <Main
      filmsInfo={filmsInfo}
      playButtonClickHandler={() => {}}
    />
  </React.Fragment>;
};

App.propTypes = {
  filmsInfo: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        releaseDate: PropTypes.instanceOf(Date).isRequired
      })
  )
};

export default App;
