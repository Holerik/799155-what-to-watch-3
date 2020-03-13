// main.e2e.test.js
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from './tabs.jsx';

const tabItems = [`All genres`, `Dramas`, `Crime`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should tab be pressed`, () => {
  let pageId = -1;

  const setPageId = (id) => {
    pageId = id;
  };
  const main = shallow(
      <Tabs
        activeItem={5}
        tabItems={tabItems}
        setPageId={setPageId}
      />
  );
  const tab = main.find(`ul.movie-nav__list`);
  tab.props().onClick();
  expect(pageId).toEqual(5);
});
