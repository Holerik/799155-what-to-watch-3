// with-tabs.e2e.test.js
import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PageTabs from '../../components/tabs/tabs.jsx';
import withTabs from './with-tabs.jsx';

const tabItems = [`Overview`, `Details`, `Review`];

Enzyme.configure({
  adapter: new Adapter(),
});

const Tabs = withTabs(PageTabs);

it(`Should tab be pressed`, () => {

  let activeItem = -1;

  const tabClickHandler = jest.fn();

  const setActiveItem = (id) => {
    activeItem = id;
  };

  const main = mount(
      <Tabs
        activeItem={0}
        stateItem={0}
        mouseClickHandler={tabClickHandler}
        setActiveItem={setActiveItem}
        tabItems={tabItems}
      />
  );
  const tab = main.find(`a.movie-nav__link`);
  tab.first().simulate(`click`);
  expect(tabClickHandler).toHaveBeenCalledTimes(1);
  tab.first().simulate(`mouseOver`);
  expect(activeItem).toEqual(0);
});
