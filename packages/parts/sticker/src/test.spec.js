// PARTS [ DATA > TESTS ] ######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Sticker from '.';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. PROPS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const props = {
  prefix: 'usd',
  value: '2300.00',
  label: 'Amount',
  placement: 'top',
  align: 'left',
  size: 'large'
}

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. TEST +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

describe('Parts: Sticker', () => {

  // 3.1. RENDER WITHOUT PROPS .................................................

  test('renders correctly without any props', () => {
    const tree = renderer.create(
      <Sticker />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 3.1. END ..................................................................

  // 3.2. RENDER WITH ALL PROPS ................................................

  test('renders correctly with all props', () => {
    const tree = renderer.create(
      <Sticker
        prefix={ props.prefix }
        value={ props.value }
        size={ props.size }
        align={ props.align }
        placement={ props.placement }
        label={ props.label }
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 3.1. END ..................................................................

});

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
