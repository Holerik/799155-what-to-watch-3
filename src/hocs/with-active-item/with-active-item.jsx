// with-active-item.jsx
import React from 'react';
import PropTypes from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this._mouseClickHandler = this._mouseClickHandler.bind(this);
      this._setActiveItem = this._setActiveItem.bind(this);
      this.state = {
        activeItem: props.activeItem,
      };
      this.stateItem = -1;
    }

    _setActiveItem(index) {
      this.setState({activeItem: index});
      this.stateItem = index;
    }

    _mouseClickHandler() {
      this.props.mouseClickHandler(this.stateItem);
    }

    render() {
      return (
        <Component
          {...this.props}
          stateItem={this.state.activeItem}
          activeItem={this.props.activeItem}
          setActiveItem={this._setActiveItem}
          mouseClickHandler={this._mouseClickHandler}
          tabItems={this.props.tabItems}
        >
        </Component>
      );
    }
  }

  WithActiveItem.propTypes = {
    activeItem: PropTypes.number.isRequired,
    mouseClickHandler: PropTypes.func.isRequired,
    tabItems: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster: PropTypes.string.isRequired,
            altPoster: PropTypes.string,
            src: PropTypes.string.isRequired,
          })
      )]).isRequired,
  };

  return WithActiveItem;
};

export default withActiveItem;
