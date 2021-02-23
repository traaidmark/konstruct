// PARTS [ PERSON ] ############################################################

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

const Person = ({
  name = undefined,
  role = undefined,
  imgSrc = undefined,
  className = '',
  ...rest
}) => {



  // 2.2. RENDER ...............................................................

  return (
    <aside className={`p-person ${ className }` }>
      {
        imgSrc && (
          <figure>
            <img src={ imgSrc } alt={ name } />
          </figure>
        )
      }
      { name && <strong>{ name }</strong> }
      { role && <small>{ role }</small> }
    </aside>
  );

  // 2.2. END ..................................................................

}

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Person.propTypes = {
  name: propTypes.string,
  role: propTypes.string,
  imgSrc: propTypes.string,
  className: propTypes.string,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Person;

// END OF FILE #################################################################
