// tabs.e2e.test.js
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from './tabs.jsx';

const tabItems = [`All genres`, `Dramas`, `Crime`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should tab be pressed`, () => {
  const tabClickHandler = jest.fn();
  const tabMouseOverHandler = jest.fn();

  const main = shallow(
      <Tabs
        activeItem={5}
        stateItem={5}
        tabItems={tabItems}
        tabClickHandler={tabClickHandler}
        tabMouseOverHandler={tabMouseOverHandler}
      />
  );
  const tab = main.find(`ul.movie-nav__list`);
  tab.props().onClick();
  expect(tabClickHandler.mock.calls.length).toBe(1);
});
