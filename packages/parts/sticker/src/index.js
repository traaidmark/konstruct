// PARTS [ STICKER ] ###########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  _setFontSize,
} from '@traaidmark/konstruct-mixins';
import Data from '@traaidmark/konstruct-part-data';

// 1.1. END ....................................................................

// 1.2. STYLESHEET .............................................................

// 1.2.1. CONTAINER

const StickerContainer = styled.div`

  --sticker-label-color:      var(--color);

  display: block;
  text-align: ${ ({ align }) => align && align };

  small {
    display: block;
    font-weight: var(--weight-regular);
    color: var(--sticker-label-color)!important;
  }

`;

// 1.2.1. END

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Sticker = ({
  label = '',
  value = '',
  prefix = '',
  placement = 'bottom',
  align = 'center',
  size = 'default',
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................
  // 2.1. END ..................................................................

  // 2.2. RENDER ...............................................................

  return (
    <StickerContainer align={ align } { ...rest }>
      { placement === 'top' && <small>{ label }</small> }
      <Data value={ value } size={ size } prefix={ prefix } />
      { placement === 'bottom' && <small>{ label }</small> }
    </StickerContainer>
  );

  // 2.2. END ..................................................................

}

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Sticker.propTypes = {
  /** Display a label to your sticker. */
  label: propTypes.string,
  /** Display a prefix to your value with a slightly different style. */
  prefix: propTypes.string,
  /** Display your value. */
  value: propTypes.string,
  /** Modify the size of your sticker. */
  size: propTypes.oneOf([ 'small', 'default', 'large', 'xlarge']),
  /** Modify the alignment of your sticker. */
  align: propTypes.oneOf([ 'left', 'right', 'center']),
  /** Modify the vertical placement of your label. */
  placement: propTypes.oneOf([ 'top', 'bottom']),
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Sticker;

// END OF FILE #################################################################
