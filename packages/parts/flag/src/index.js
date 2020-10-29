// PARTS [ FLAG ] ##############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  _setFontSize,
} from '@traaidmark/konstruct-mixins';

// 1.1. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. STYLESHEET +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.1. FUNCTIONS ..............................................................
// 2.1. END ....................................................................

// 2.2. STYLES .................................................................

const Styled = {
  flag: styled.span`

    --flag-radius:                      var(--radius-small);
    --flag-info-background-color:       var(--color-blue);
    --flag-info-text-color:             var(--color-darker);
    --flag-new-background-color:        var(--color-green);
    --flag-new-text-color:              var(--color-darker);
    --flag-warning-background-color:    var(--color-orange);
    --flag-warning-text-color:          var(--color-darker);
    --flag-error-background-color:      var(--color-red);
    --flag-error-text-color:            var(--color-darker);

    ${ _setFontSize('small') }
    font-weight: var(--weight-bold);

    background-color: ${ ({ variant }) => `var(--flag-${ variant }-background-color)` }!important;
    color: ${ ({ variant }) => `var(--flag-${ variant }-text-color)` }!important;

    padding: 2px var(--gutter-small);
    border-radius: var(--flag-radius);

  `
};

// 2.2. END ....................................................................

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Flag = ({
  text,
  variant = 'info',
  ...rest
}) => {
  
  // 3.1. FUNCTIONS ............................................................
  // 3.1. END ..................................................................
  
  // 3.2. RENDER ...............................................................

  if(text) {  
    return (
      <Styled.flag variant={ variant } { ...rest }>
        { text }
      </Styled.flag>
    );
  };

  return null;

  // 3.2. END ..................................................................

};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Flag.propTypes = {
  /**  Text content of this component. */
  text: propTypes.string,
  /**  Variant theming of the flag. */
  variant: propTypes.string,
};

// 4. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Flag;

// END OF FILE #################################################################
