// show-more.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from './show-more.jsx';

const showMoreClickHandler = () => {};

it(`<ShowMore /> should render correctly`, () => {
  const tree = renderer
    .create(<ShowMore
      filmsCount={2}
      showMoreClickHandler={showMoreClickHandler}
      lastCard={1}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
