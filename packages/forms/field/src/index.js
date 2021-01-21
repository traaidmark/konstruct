// FORM [ FIELD ] ##############################################################

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

const TextField = ({
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

  const errorClass = hasError ? 'hasError' : '';

  // 3.1. END ..................................................................
  
  // 3.2. RENDER ...............................................................

  return (
    <div className={ `form-field ${ errorClass }` }>
      { 
        label && (
          <label htmlFor={ name } className="form-field-label">
            { label }
          </label>
        )
      }
      { prefix && <span className="form-field-prefix">{ prefix }</span> }
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
        className={ errorClass }
        { ...rest }
      />
      { postfix && <span className="form-field-postfix">{ postfix }</span> }
      { message && <small className="form-field-message">{ message }</small> }
    </div>
  );

  // 3.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

TextField.propTypes = {
  /**  Text content of this component. */
  text: propTypes.string,
  /**  Variant theming of the flag. */
  variant: propTypes.string,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default TextField;

// END OF FILE #################################################################
