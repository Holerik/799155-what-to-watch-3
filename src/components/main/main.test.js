// main.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const filmsInfo = [
  {
    id: 501,
    title: `Unsane`,
    preview: `img/unsane.jpg`,
    description: `A young woman is involuntarily committed to a mental institution, where she is confronted by her greatest fear--but is it real or a product of her delusion?`,
    genre: `Horror`,
  }
];

it(`<Main /> should render Terminator film card`, () => {
  const tree = renderer
    .create(<Main
      filmsInfo={filmsInfo}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
