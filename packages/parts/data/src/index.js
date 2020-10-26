// PARTS [ DATA ] ##############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  _setFontSize,
} from '@traaidmark/konstruct-mixins';

// 1.1. END ....................................................................

// 1.2. STYLESHEET .............................................................

// 2.1. DATA CONTAINER

const DataContainer = styled.div`
  display: inline-flex;
  align-items: center;
  font-weight: var(--weight-bold);
  color: var(--color-darker);

  strong {
    ${
      ({ size }) => {
        switch(size) {
          case 'small':
            return _setFontSize('small');
          case 'large':
            return _setFontSize('large');
          case 'xlarge':
            return _setFontSize('xlarge');
          default:
            return _setFontSize('medium');
        }
      }
    }
  }

  i {
    font-weight: var(--weight-light);
    color: var(--color-dark);
    font-style: normal;
    text-transform: uppercase;
    margin-right: 5px;
    ${ ({ size }) => {
      switch(size) {
        case 'small':
          return _setFontSize('small');
        case 'large':
          return _setFontSize('large');
        case 'xlarge':
          return _setFontSize('xlarge');
        default:
          return _setFontSize('normal');
        }
    } }
  }

`;

// 2.1. END

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Data = ({
  prefix = '',
  value = 'N/A',
  size = 'default',
  ...rest
}) => {



  // 2.2. RENDER ...............................................................

  return (
    <DataContainer
      size={ size }
      { ...rest }
    >
      { prefix && <i>{ prefix }</i> }
      <strong>{ value }</strong>
    </DataContainer>
  );

  // 2.2. END ..................................................................

}

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Data.propTypes = {
  /** Display a prefix to your value with a slightly different style. */
  prefix: propTypes.string,
  /** Display your value. */
  value: propTypes.string.isRequired,
  /** Modify the size of your data. */
  size: propTypes.oneOf([ 'small', 'default', 'large', 'xlarge']),
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Data;

// END OF FILE #################################################################
