// PARTS [ BUTTON ] ############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useCallback } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  _makeButton,
  _setButtonSize,
} from '@traaidmark/konstruct-mixins';

// 1.1. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. STYLESHEETS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const ButtonContainer = styled.button`
  ${ ({ variant }) => variant && _makeButton(variant) };
  ${ ({ variant, size }) => variant && size && _setButtonSize(variant.includes('icon'), size) };
`;
export const AContainer = styled.a`
  ${ ({ variant }) => variant && _makeButton(variant) };
  ${ ({ variant, size }) => variant && size && _setButtonSize(variant.includes('icon'), size) };
`;

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Button  = ({
  children,
  onClick,
  to,
  size = 'default',
  variant = undefined,
  disabled = false,
  type = 'button',
  target,
  ...rest
}) => {

  // 3.1. FUNCTIONS ............................................................

  // 3.1.1. HANDLE CLICK

  const handleClick = useCallback((e) => {

    if (onClick && !disabled) {
      e.preventDefault();
      return onClick(e);
    };

    return null;

  }, [onClick, disabled]);

  // 3.1.1. END

  // 33.1.2. LINK CONTEXT

  const setTarget = useCallback((e) => {

    if (target) {
      return target;
    }

    if (to && to.includes('http')) {
      return '_blank';
    };

    return '_self';

  }, [to, target]);

  // 3.1.2. END

  // 3.1. END ..................................................................

  // 3.2. RENDER COMPONENT .....................................................

  if(!children) {
    throw new Error('Button: Empty buttons are not allowed.');
  };

  if(to) {
    return (
      <AContainer
        href={ to }
        variant={ variant }
        size={ size }
        rel="noopener noreferer"
        target={ setTarget() }
      >
        { children }
      </AContainer>
    );
  };

  return (
    <ButtonContainer
      onClick={ e => handleClick(e) }
      variant={ variant }
      size={ size }
      disabled={ disabled }
      type={ type }
      { ...rest }
    >
      { children }
    </ButtonContainer>
  );

  // 3.2. END ..................................................................

};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Button.propTypes = {
  /**  Destination url if you want to use this as a link. */
  to: propTypes.string,
  /**  Click event if using as a button. */
  onClick: propTypes.func,
  /**  Content of component. */
  children: propTypes.node.isRequired,
  /**  The variant name that matches a css variable set. */
  variant: propTypes.string,
  /**  The size the link should display as. */
  size: propTypes.oneOf(['small', 'default', 'large']),
  /**  Determines if button is disabled. */
  disabled: propTypes.bool,
  /**  The role type if using as a button. */
  type: propTypes.oneOf(['button', 'reset', 'submit']),
  /**  The link context if using as a link. */
  target: propTypes.oneOf(['_self', '_blank', '_parent', '_top']),
};

// 4. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Button;

// END OF FILE #################################################################
