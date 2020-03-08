// with-movie-nav.test.js
import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withMovieNav from "./with-movie-nav.jsx";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withMovieNav(MockComponent);

it(`withMovieNav is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        activeItem={1}>
      </MockComponentWrapped>).toJSON();

  expect(tree).toMatchSnapshot();
});
