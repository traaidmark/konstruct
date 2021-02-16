// PART [ STICKER ] ############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import propTypes from 'prop-types';
import Data from '@traaidmark/konstruct-part-data';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import './stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Sticker = ({
  label = undefined,
  value = undefined,
  prefix = undefined,
  className = '',
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................
  // 2.1. END ..................................................................

  // 2.2. RENDER ...............................................................

  return (
    <div
      className={ `p-sticker ${ className ? className : '' }` }
      { ...rest }
    >
      { label && <small>{ label }</small> }
      <Data value={ value } prefix={ prefix } />
    </div>
  );

  // 2.2. END ..................................................................

}

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Sticker.propTypes = {
  /** Display a label to your sticker. */
  label: propTypes.string,
  /** Display a prefix to your value with a slightly different style. */
  prefix: propTypes.string,
  /** Display your value. */
  value: propTypes.string,
  className: propTypes.string,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Sticker;

// END OF FILE #################################################################
