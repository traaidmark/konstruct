// BUCKET [ TOOLBAR > TESTS ] ##################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Toolbar from '.';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. PROPS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const props = {
  heading: 'Why we are so great',
  headingAs: (props) => <h3 { ...props } />,
  text: <>Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien.</>,
  actions: [
    <a>Sign Up now</a>,
    <a>Do this other thing</a>
  ],
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. TEST +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

describe('Bucket: Toolbar', () => {

  // 3.1. RENDER WITHOUT PROPS .................................................

  test('renders correctly without any props', () => {
    const tree = renderer.create(
      <Toolbar />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 3.1. END ..................................................................

  // 3.2. RENDER WITH ALL PROPS ................................................

  test('renders correctly with all props', () => {
    const tree = renderer.create(
      <Toolbar { ...props } />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 3.2. END ..................................................................

});

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
