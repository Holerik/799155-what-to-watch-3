// main.e2e.test.js
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreTabs from './genre-tabs.jsx';

const filmsFullInfo = [
  {
    id: 235,
    title: `Big Women`,
    poster: `img/lbig-woman-poster.jpg`,
    altPoster: `big Women poster`,
    background: `img/big-wooman-bg.jpg`,
    altBackground: `Movie background`,
    description: `Based on Loiusa May Alcott’s classic novel with the same name, Little Women is a timeless tale of love, life and ambitions`,
    review: `A writer, a sketch artist, an aspiring actress and a budding pianist. All four March sisters are gifted with a unique talent, but they live in the times where the only two choices for women are marriage and death. Writer-director Greta Gerwig`,
    reviews: [0, 1, 2, 3, 4],
    genre: [`Drama`, `Thriller`],
    year: 2019,
    duration: `2h 15min`,
    age: `16+`,
    rating: {
      score: `8.0`,
      level: `very good`,
      count: 150,
    },
    director: `Greta Gerwig`,
    starring: [`Saoirse Ronan`, `Emma Watson`, `Florence Pugh`, `Meryl Streep`, `Timothee Chalamet`],
    src: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
  }
];


const tabItems = [`All genres`, `Dramas`, `Crime`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should genre tab be pressed`, () => {
  let newGenre = ``;

  const setGenre = (genre) => {
    newGenre = genre;
  };
  const main = shallow(
      <GenreTabs
        activeItem={0}
        tabItems={tabItems}
        setGenre={setGenre}
        filmsFullInfo={filmsFullInfo}
      />
  );
  const tab = main.find(`ul.catalog__genres-list`);
  tab.props().onClick();
  expect(newGenre).toEqual(tabItems[0]);
});
