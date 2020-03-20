// with-tabs.jsx
import React from 'react';
import PropTypes from 'prop-types';

const withTabs = (Component) => {
  class WithTabs extends React.PureComponent {
    constructor(props) {
      super(props);
      this._tabMouseOverHandler = this._tabMouseOverHandler.bind(this);
      this._tabClickHandler = this._tabClickHandler.bind(this);
    }

    _tabMouseOverHandler(evt) {
      const index = this.props.tabItems.findIndex((item) => {
        return item === evt.target.text;
      });
      this.props.setActiveItem(index);
    }

    _tabClickHandler() {
      this.props.mouseClickHandler();
    }

    render() {
      return (
        <Component
          {...this.props}
          stateItem={this.props.stateItem}
          activeItem={this.props.activeItem}
          tabMouseOverHandler={this._tabMouseOverHandler}
          tabClickHandler={this._tabClickHandler}
          tabItems={this.props.tabItems}
        >
        </Component>
      );
    }
  }

  WithTabs.propTypes = {
    activeItem: PropTypes.number.isRequired,
    stateItem: PropTypes.number.isRequired,
    mouseClickHandler: PropTypes.func.isRequired,
    setActiveItem: PropTypes.func.isRequired,
    tabItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  return WithTabs;
};

export default withTabs;
