// show-more.e2e.test.js
import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowMore from './show-more.jsx';


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should check Show more button was clicked`, () => {
  let firstCard = -1;
  let lastCard = -1;
  const setShowLimits = (limits) => {
    firstCard = limits.first;
    lastCard = limits.last;
  };

  const main = mount(
      <ShowMore
        filmsCount={7}
        setShowLimits={setShowLimits}
        lastCard={6}
      />
  );
  const button = main.find(`button.catalog__button`);
  button.simulate(`click`);
  expect(main.state().lastCard).toEqual(6);
  expect(firstCard).toEqual(6);
  expect(lastCard).toEqual(6);
});
