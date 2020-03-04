// review.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';

const reviewInfo = [
  {
    id: 33,
    text: `Review text`,
    author: `review author`,
    date: `2016-12-20`,
    rating: `7,2`,
  }
];


it(`<Review /> should render some review`, () => {
  const tree = renderer
    .create(<Review
      review={reviewInfo[0]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
