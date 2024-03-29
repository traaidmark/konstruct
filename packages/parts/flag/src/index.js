// PARTS [ FLAG ] ##############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import propTypes from 'prop-types';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import './stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Flag = ({
  text,
  className,
  ...rest
}) => {
  
  // 2.1. FUNCTIONS ............................................................
  // 2.1. END ..................................................................
  
  // 2.2. RENDER ...............................................................

  if(text) {  
    return (
      <span
        className={ `p-flag ${ className ? className : '' }` }
        { ...rest }
      >
        { text }
      </span>
    );
  };

  return null;

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Flag.propTypes = {
  /**  Text content of this component. */
  text: propTypes.string,
  className: propTypes.string,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Flag;

// END OF FILE #################################################################
