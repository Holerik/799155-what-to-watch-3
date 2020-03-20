// tabs.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';

const tabClickHandler = () => {};
const tabMouseOverHandler = () => {};

const tabItems = [`Overview`, `Details`, `Review`];

it(`<Tabs /> should render correctly`, () => {
  const tree = renderer
    .create(<Tabs
      activeItem={0}
      stateItem={0}
      tabClickHandler={tabClickHandler}
      tabMouseOverHandler={tabMouseOverHandler}
      tabItems={tabItems}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
