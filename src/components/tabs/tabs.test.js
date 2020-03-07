// footer.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';

const setPageId = () => {}

it(`<Tabs /> should render correctly`, () => {
  const tree = renderer
    .create(<Tabs
	activeItem={0}
	setPageId={setPageId}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
