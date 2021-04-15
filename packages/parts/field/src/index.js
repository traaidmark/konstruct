// PART [ FIELD ] ##############################################################

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

const Field  = ({
  children,
  className = '',
  label,
  labelFor,
  message,
  hasError,
  isRequired,
  prepend,
  postpend,
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................

  // 2.1.2. MAKE CLASSES

  // 2.1.2. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (
    <div className={ `f-input ${ className }` } { ...rest }>
      { label && <label for={ labelFor }>{ label }</label>}
      <div className="f-input__content">
        { prepend && <span className="f-input__prepend">{ prepend }</span> }
        { children }
        { postpend && <span className="f-input__postpend">{ postpend }</span> }
      </div>
      { message && <small>{ message }</small> }
    </div>
  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Field.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  label: propTypes.string,
  labelFor: propTypes.string,
  message: propTypes.string,
  hasError: propTypes.bool,
  isRequired: propTypes.bool,
  prepend: propTypes.string,
  postpend: propTypes.string,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Field;

// END OF FILE #################################################################
