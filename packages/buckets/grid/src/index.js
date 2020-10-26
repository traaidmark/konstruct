// BUCKET [ GRID ] #############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  _setDevice,
} from '@traaidmark/konstruct-mixins';

// 1.1. END ....................................................................

// 1.2. STYLESHEET .............................................................

// 1.2.1. CONTAINER

const GridContainer = styled.div`

  display: grid;
  @media ${ _setDevice.s } {
    grid-template-columns: ${ ({ smallCols }) => smallCols && smallCols };
    grid-gap: ${ ({ smallGutter }) => smallGutter && smallGutter };
  };
  @media ${ _setDevice.m } {
    grid-template-columns: ${ ({ mediumCols }) => mediumCols && mediumCols };
    grid-gap: ${ ({ medium }) => medium && medium.gutter && medium.gutter };
  };
  @media ${ _setDevice.l } {
    grid-template-columns: ${ ({ largeCols }) => largeCols && largeCols };
    grid-gap: ${ ({ largeGutter }) => largeGutter && largeGutter };
  };

`;

// 1.2.1. END

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Grid  = ({
  children,
  largeCols = '1fr 1fr',
  largeGutter = 'var(--gutter-medium)',
  mediumCols = '1fr 1fr',
  mediumGutter = 'var(--gutter)',
  smallCols = '1fr',
  smallGutter = 'var(--gutter)',
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (

    <GridContainer
      smallCols={ smallCols }
      smallGutter={ smallGutter }
      mediumCols={ mediumCols }
      mediumGutter={ mediumGutter }
      largeCols={ largeCols }
      largeGutter={ largeGutter }
      { ...rest }
    >
      { children }
    </GridContainer>

  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Grid.propTypes = {
  /** Content of component */
  children: propTypes.node.isRequired,
  /** Columns template for large viewports */
  largeCols: propTypes.string,
  /** Grid gap for large viewports */
  largeGutter: propTypes.string,
  /** Columns template for medium viewports */
  mediumCols: propTypes.string,
  /** Grid gap for medium viewports */
  mediumGutter: propTypes.string,
  /** Columns template for small viewports */
  smallCols: propTypes.string,
  /** Grid gap for small viewports */
  smallGutter: propTypes.string,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Grid;

// END OF FILE #################################################################
