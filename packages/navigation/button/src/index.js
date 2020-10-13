// NAVIGATION > BUTTON #########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useCallback } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  _mixinMakeButton,
  _mixinMakeIconButton,
} from '@traaidmark/konstruct-mixins';

// 1.1. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. STYLESHEETS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const paintButton = (variant, size) => {
  if (variant.includes('icon')) {
    return _mixinMakeIconButton(variant, size);
  }
  return _mixinMakeButton(variant, size);
};

export const ButtonContainer = styled.button`
  background:red;
`;

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Button  = ({
  onClick,
  children,
  size = 'default',
  variant = '',
  disabled = false,
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................

  // 2.1.1. HANDLE CLICK

  const handleClick = useCallback((e) => {

    if (onClick && !disabled) {
      e.preventDefault();
      onClick(e);
    }

  }, [onClick, disabled]);

  // 2.1.1. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (
    <ButtonContainer
      onClick={ e => handleClick(e) }
      variant={ variant }
      size={ size }
      disabled={ disabled }
      { ...rest }
    >
      { children }
    </ButtonContainer>
  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Button.propTypes = {
  /**  Click event for this component. */
  onClick: propTypes.func,
  /**  Contents within this component. */
  children: propTypes.node,
  /**  The variant name that matches a css variable set. */
  variant: propTypes.string,
  /**  The size the link should display as. */
  size: propTypes.oneOf(['small', 'default', 'large']),
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Button;

// END OF FILE #################################################################
