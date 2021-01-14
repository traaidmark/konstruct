// FORM [ FIELD ] ##############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import propTypes from 'prop-types';

// 1.1. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Field = ({
  extended = false,
  input = 'default',
  type = 'text',
  label,
  name,
  placeholder,
  value,
  onChange,
  prefix,
  postfix,
  isDisabled = false,
  message = undefined,
  hasError = false,
  required = false,
  fieldRef,
  size = 'default',
  ...rest
}) => {
  
  // 3.1. FUNCTIONS ............................................................
  // 3.1. END ..................................................................
  
  // 3.2. RENDER ...............................................................

  return (
    <div>
      { 
        label && (
          <label htmlFor={ name }>
            { label }
          </label>
        )
      }
      { prefix && <span>{ prefix }</span> }
      <input
        id={ name }
        name={ name }
        type={ type }
        placeholder={ placeholder }
        value={ value }
        onChange={ e => handleChange(e) }
        onKeyDown={ e => handleKeyDown(e) }
        disabled={ isDisabled && 'disabled' }
        ref={ fieldRef }
        required={ required }
        { ...rest }
      />
      { postfix && <span>{ postfix }</span> }
      { message && <small>{ message }</small> }
    </div>
  );

  // 3.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Field.propTypes = {
  /**  Text content of this component. */
  text: propTypes.string,
  /**  Variant theming of the flag. */
  variant: propTypes.string,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Field;

// END OF FILE #################################################################
