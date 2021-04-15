// BUCKET [ FORM ] #############################################################

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

const Form  = ({
  children,
  className,
  actions = [],
  footerTopText,
  footerBottomText,
  hasError = false,
  isLoading = false,
  loader,
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................

  // 2.1. ACTIONS

  const Actions = useCallback(() => {
    if (actions.length === 0) return null;
    return (
      <ul className="u-list-horizontal">
        { actions.map((i,k) => (
          <li key={ `form-action-${ k }` }>{ i }</li>
        )) }
      </ul>
    );
  }, [actions])

  // 2.1. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (

    <form className={ `b-form ${ isLoading ? 'b-form--loading' : '' }  ${ hasError ? 'b-form--hasError' : '' } ${ className }` } { ...rest }>
      <div className={ `b-form__body ${ isLoading ? 'b-form__body--loading' : '' }` }>
      { children }
      </div>
      <footer className="b-form__footer">
        { isLoading && loader ? loader : 'Loading...' }
        {
          !isLoading && (
            <>
              { footerTopText && <small className="b-form__footer-top-text">{ footerTopText }</small> }
              <Actions />
              { footerBottomText && <small className="b-form__footer-bottom-text">{ footerBottomText }</small> }
            </>
          )
        }
        
      </footer>
    </form>

  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Form.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  /** Array of html elements */
  actions: propTypes.array,
  footerTopText: propTypes.string,
  footerBottomText: propTypes.string,
  hasError: propTypes.bool,
  isLoading: propTypes.bool,
  loader: propTypes.node,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Form;

// END OF FILE #################################################################
