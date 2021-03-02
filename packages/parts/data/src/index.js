// PARTS [ DATA ] ##############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useCallback } from 'react';
import propTypes from 'prop-types';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import './stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Data = ({
  prefix = undefined,
  value = 'N/A',
  className = '',
  size = 'default',
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................
  // 2.1. END ..................................................................

  // 2.2. RENDER ...............................................................

  return (
    <div
      className={ `p-data p-data--${ size } ${ className }` }
      { ...rest }
    >
      { prefix && <i>{ prefix }</i> }
      <strong>{ value }</strong>
    </div>
  );

  // 2.2. END ..................................................................

}

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Data.propTypes = {
  /** Display a prefix to your value with a slightly different style. */
  prefix: propTypes.string,
  /** Display your value. */
  value: propTypes.string,
  /** The size of the component ('small', 'default', 'large') */
  size: propTypes.oneOf['small', 'default', 'large', 'xlarge'],
  className: propTypes.string,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Data;

// END OF FILE #################################################################
