// PART [ FLAG > TESTS ] #######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Flag from '../src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. TEST +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

describe('Part: Flag', () => {

  // 2.1. RENDER WITHOUT PROPS .................................................

  test('renders correctly without any props', () => {
    const tree = renderer.create(
      <Flag />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 2.1. END ..................................................................

  // 2.2. RENDER WITH ALL PROPS ................................................

  test('renders correctly with all props', () => {
    const tree = renderer.create(
      <Flag text="hello" className="p-flag--info" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 2.2. END ..................................................................

});

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
