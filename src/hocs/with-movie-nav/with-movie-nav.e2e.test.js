// with-movie-nav.e2e.test.js
import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withMovieNav from './with-movie-nav.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

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


it(`Should list item be clicked`, () => {

  const wrapper = mount(
      <MockComponentWrapped
        activeItem={0}>
      </MockComponentWrapped>
  );
  wrapper.find(`a.movie-nav__link`).first().simulate(`click`);
  expect(wrapper.state().activeItem).toEqual(0);
});

