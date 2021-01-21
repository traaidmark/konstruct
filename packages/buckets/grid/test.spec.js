// BUCKET [ GRID > TESTS ] #####################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Grid from './src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. PROPS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const props = {
  largeCols: '1fr 1fr',
  largeGutter: 'var(--gutter-medium)',
  mediumCols: '1fr 1fr',
  mediumGutter: 'var(--gutter)',
  smallCols: '1fr',
  smallGutter: 'var(--gutter)',
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. TEST +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

describe('Bucket: Grid', () => {

  // 3.1. RENDER WITHOUT PROPS .................................................

  test('renders correctly without any props', () => {
    const tree = renderer.create(
      <Grid>
        <div>col 1</div>  
        <div>col 2</div>  
      </Grid>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 3.1. END ..................................................................

  // 3.2. RENDER WITH ALL PROPS ................................................

  test('renders correctly with all props', () => {
    const tree = renderer.create(
      <Grid
        smallCols={ props.smallCols }
        smallGutter={ props.smallGutter }
        mediumCols={ props.mediumCols }
        mediumGutter={ props.mediumGutter }
        largeCols={ props.largeCols }
        largeGutter={ props.largeGutter }
      >
        <div>col 1</div>  
        <div>col 2</div>  
      </Grid>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 3.2. END ..................................................................

});

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
