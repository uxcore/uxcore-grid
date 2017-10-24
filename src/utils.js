import styleMaps from './StyleMaps';

function isGridProp(propName) {
  const field = ['Pull', 'Offset', 'Push'];
  const styleKeys = Object.values(styleMaps.SIZES);
  const len = styleKeys.length;
  const gridProps = [...styleKeys];
  let state = false;
  field.forEach((value) => {
    for (let i = 0; i < len; i++) {
      gridProps.push(styleKeys[i] + value);
    }
  });

  gridProps.forEach((value) => {
    if (value === propName) {
      state = true;
    }
  });
  return state;
}

function splitGridProps(props) {
  const elementProps = [];
  const getGridProps = {};
  Object.entries(props).forEach(([propName, propValue]) => {
    if (!isGridProp(propName)) {
      elementProps[propName] = propValue;
    } else {
      getGridProps[propName] = props[propName];
    }
  });
  return [elementProps, getGridProps];
}

export default { splitGridProps };
