// BUCKET [ SECTION > TESTS ] ##################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Section from './src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. PROPS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const props = {
  headerTitle: 'Why we are so great',
  headerText: <>Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex <strong>consequat ultrices.</strong></>,
  footerTitle: 'Sign up today!',
  footerActions: [
    <a>Link 1</a>,
    <a>Link 2</a>,
  ],
  noTop: true,
  noRight: true,
  noBottom: true,
  noLeft: true,
  scrollX: true,
  scrollY: true,
  variantX: 'wide',
  variantY: 'shallow',
}

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
      <Section
        headerTitle={ props.headerTitle }
        headerText={ props.headerText }
        footerTitle={ props.footerTitle }
        footerActions={ props.footerActions }
        noTop={ props.noTop }
        noRight={ props.noRight }
        noBottom={ props.noBottom }
        noLeft={ props.noLeft }
        scrollX={ props.scrollX }
        scrollY={ props.scrollY }
        variantX={ props.variantX }
        variantY={ props.variantY }
      >
        { 'Test' }
      </Section>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// 3.2. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
