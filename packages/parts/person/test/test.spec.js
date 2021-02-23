// PART [ PERSON > TESTS ] #####################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Person from '../src';

// 1.2. END ....................................................................

const args = {
  name: 'Aubrey Turner',
  role: 'Chief Growth Officer',
  imgSrc: 'https://s3.amazonaws.com/cdn.wealthpoint.app/person_aubrey_f6ce6120a8.jpg',
  className: '',
};

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. TEST +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

describe('Part: Person', () => {

  // 2.1. RENDER WITHOUT PROPS .................................................

  test('renders correctly without any props', () => {
    const tree = renderer.create(
      <Person />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 2.1. END ..................................................................

  // 2.2. RENDER WITH ALL PROPS ................................................

  test('renders correctly with all props', () => {
    const tree = renderer.create(
      <Person { ...args } />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 2.2. END ..................................................................

});

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
