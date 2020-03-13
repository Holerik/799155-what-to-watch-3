// tabs.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';

const setPageId = () => {};
const tabItems = [`All genres`, `Dramas`, `Crime`];

it(`<Tabs /> should render correctly`, () => {
  const tree = renderer
    .create(<Tabs
      activeItem={0}
      setPageId={setPageId}
      tabItems={tabItems}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
