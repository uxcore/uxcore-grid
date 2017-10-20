import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import React from 'react';

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
  componentClass: elementType,
};
Row.defaultProps = {
  componentClass: 'div',
};
export default Row;
