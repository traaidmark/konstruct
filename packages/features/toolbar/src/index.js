// FEATURE [ TOOLBAR ] #########################################################

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

const Toolbar  = ({
  heading,
  text,
  className = '',
  actions = [],
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................

  // 2.1.1. ACTIONS

  const Actions = useCallback(() => {
    if (actions.length === 0) return null;
    return (
      <ul className="f-toolbar__actions u-list-horizontal">
        {
          actions.map((i,k) => (
            <li key={ `toolbar-action-${ k }` }>{ i }</li>
          ))
        }
      </ul>
    );
  }, [actions]);

  // 2.1.1. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (

    <header
      className={ `f-toolbar ${ className }` }
      { ...rest }
    >
      <div className="f-toolbar__content">
        { heading && <h1>{ heading }</h1> }
        { text && <p>{ text }</p> }
      </div>
      <Actions />
    </header>

  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Toolbar.propTypes = {
  className: propTypes.string,
  heading: propTypes.string,
  text: propTypes.string,
  /** Array of actions `[<a>action1</a>]` */
  actions: propTypes.array,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Toolbar;

// END OF FILE #################################################################
