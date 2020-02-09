/* eslint-disable react/prop-types */
// app.jsx
import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  const {filmsInfo} = props;
  return <React.Fragment>
    <h1>React Application</h1>
    <Main
      filmsInfo={filmsInfo}
    />
  </React.Fragment>;
};

export default App;
