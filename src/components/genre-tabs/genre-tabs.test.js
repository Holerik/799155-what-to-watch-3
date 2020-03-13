// footer.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import GenreTabs from './genre-tabs.jsx';

const detailedFilmInfo = [
  {
    id: 0,
    title: `Little Women`,
    poster: `img/little-woman-poster.jpg`,
    altPoster: `ittle Women poster`,
    background: `img/little-wooman-bg.jpg`,
    altBackground: `Movie background`,
    description: `Based on Loiusa May Alcott’s classic novel with the same name, Little Women is a timeless tale of love, life and ambitions`,
    review: `A writer, a sketch artist, an aspiring actress and a budding pianist. All four March sisters are gifted with a unique talent, but they live in the times where the only two choices for women are marriage and death. Writer-director Greta Gerwig`,
    reviews: [1, 2],
    genre: [`Drama`, `Romance`],
    year: 2019,
    duration: `2h 15min`,
    age: `16+`,
    rating: {
      score: `8.0`,
      level: `very good`,
      count: 150,
    },
  }
];
const setPageId = () => {};
const setGenre = () => {};

const tabItems = [`All genres`, `Dramas`, `Crime`];

it(`<GenreTabs /> should render correctly`, () => {
  const tree = renderer
    .create(<GenreTabs
      activeItem={0}
      setPageId={setPageId}
      tabItems={tabItems}
      filmsFullInfo={detailedFilmInfo}
      setGenre={setGenre}
      genre={tabItems[0]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
