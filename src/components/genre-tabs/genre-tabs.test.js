// genre-tabs.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import GenreTabs from './genre-tabs.jsx';

const tabClickHandler = () => {};
const tabMouseOverHandler = () => {};

const tabItems = [`All genres`, `Dramas`, `Crime`];

it(`<GenreTabs /> should render correctly`, () => {
  const tree = renderer
    .create(<GenreTabs
      activeItem={0}
      stateItem={0}
      tabClickHandler={tabClickHandler}
      tabMouseOverHandler={tabMouseOverHandler}
      tabItems={tabItems}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
