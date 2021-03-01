// FEATURE [ BLOCK ] ###########################################################

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

const Block = ({
  children,
  heading,
  actions = [],
  className = '',
  ...rest
}) => {
  
  // 2.1. FUNCTIONS ............................................................

  // 2.1.1. RENDER HEADER
  
  const Header = useCallback(() => {
    if (!heading && actions.length === 0) return null;
    return (
      <header className="f-block__header">
        { heading && <h4>{ heading }</h4> }
        { 
          actions.length > 0 && (
            <ul className="u-list-horizontal">
              {
                actions.map((i,k) => (
                  <li key={ `block-action-${ k }` }>{ i }</li>
                ))
              }
            </ul>
          )
        }
      </header>
    );
  }, [heading, actions]);

  // 2.1.1. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (
    <aside className={ `f-block ${ className }` } { ...rest }>
      <Header />
      { children }
    </aside>
  );

  // 2.2. END ..................................................................

}

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Block.propTypes = {
  children: propTypes.node,
  heading: propTypes.string,
  className: propTypes.string,
  actions: propTypes.array,
}

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Block;

// END OF FILE #################################################################
