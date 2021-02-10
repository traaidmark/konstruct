// BUCKET [ SECTION > TESTS ] ##################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Props from './props';

import Section from '../src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. TEST +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. RENDER WITHOUT PROPS ...................................................

describe('Bucket > Section', () => {
  test('renders correctly without any props', () => {
    const tree = renderer.create(
      <Section>{ 'Test' }</Section>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// 3.1. END ....................................................................

// 3.2. RENDER WITH ALL PROPS ..................................................

describe('Bucket > Section', () => {
  test('renders correctly with all props', () => {
    const tree = renderer.create(
      <Section {...Props }>
        { 'Test' }
      </Section>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// 3.2. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
