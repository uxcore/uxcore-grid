import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ComponentClass = this.props.componentClass;

    return (
      <ComponentClass {...this.props} className={classNames(this.props.className, 'kuma-row')}>
        {this.props.children}
      </ComponentClass>
    );
  }
}

Row.displayName = 'Row';
Row.propTypes = {
  /**
     * You can use a custom element for this component
     */
  componentClass: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};
Row.defaultProps = {
  componentClass: 'div',
};
export default Row;
