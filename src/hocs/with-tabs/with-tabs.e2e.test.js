// with-tabs.e2e.test.js
import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PageTabs from '../../components/tabs/tabs.jsx';
import withTabs from './with-tabs.jsx';
import withActiveItem from '../with-active-item/with-active-item.jsx';

const tabItems = [`Overview`, `Details`, `Review`];

Enzyme.configure({
  adapter: new Adapter(),
});

const Tabs = withActiveItem(withTabs(PageTabs));

it(`Should tab be pressed`, () => {

  const tabClickHandler = jest.fn();
  const main = mount(
      <Tabs
        activeItem={0}
        mouseClickHandler={tabClickHandler}
        tabItems={tabItems}
      />
  );
  const tab = main.find(`a.movie-nav__link`);
  tab.first().simulate(`click`);
  expect(tabClickHandler).toHaveBeenCalledTimes(1);

});
