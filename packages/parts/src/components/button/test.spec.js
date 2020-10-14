// PARTS [ BUTTON > TESTS ] ####################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Button from '.';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. PROPS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const props = {
  children: 'Button Label',
  variant: 'primary',
  size: 'large',
}

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. TEST +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. RENDER WITHOUT PROPS ...................................................

describe('Parts > Button', () => {
  test('renders correctly without any props', () => {
    const tree = renderer.create(
      <Button>{ props.children }</Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// 3.1. END ....................................................................

// 3.2. RENDER WITH ALL PROPS ..................................................

describe('Parts > Button', () => {
  test('renders correctly with all props', () => {
    const tree = renderer.create(
      <Button
        variant={ props.variant }
        size={ props.size }
      >
        { props.children }
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// 3.2. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
