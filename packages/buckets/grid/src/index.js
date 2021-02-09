// BUCKET [ GRID ] #############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import propTypes from 'prop-types';

// 1.1. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Grid  = ({
  children,
  className,
  columns = [],
  gutters = [],
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................

  // 2.1.1. CLASS NAME

  const preparedStyles = {
    '--grid-gap-xl': gutters[0] ? gutters[0] : undefined,
    '--grid-gap-l': gutters[1] ? gutters[1] : undefined,
    '--grid-gap-m': gutters[2] ? gutters[2] : undefined,
    '--grid-gap-s': gutters[3] ? gutters[3] : undefined,
    '--grid-col-xl': columns[0] ? columns[0] : undefined,
    '--grid-col-l': columns[1] ? columns[1] : undefined,
    '--grid-col-m': columns[2] ? columns[2] : undefined,
    '--grid-col-s': columns[3] ? columns[3] : undefined,
  };

  // 2.1.1. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (

    <div
      className={ `b-grid ${ className ? className : '' }` }
      style={ preparedStyles }
      { ...rest }
    >
      { children }
    </div>

  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Grid.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  /** Array of columns for viewports [XL, L, M, S] */
  columns: propTypes.array,
  /** Array of grid gaps for viewports [XL, L, M, S] */
  gutters: propTypes.array,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Grid;

// END OF FILE #################################################################
