// PARTS [ CARD > TESTS ] ######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Card from '.';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. PROPS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const props = {
  imageSrc: 'https://source.unsplash.com/500x250/?workbench',
  imageAlt: 'This is a neat title for a card.',
  title: 'This is a neat title for a card.',
  actions: [
    <a>Click here!</a>
  ],
  meta: [
    '30 Minutes ago...',
    'Uncategorised',
    'Adrian Kirsten'
  ],
  tags: [
    <small>almost sold!</small>,
    <small>USA</small>
  ],
  children: (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at lorem mi. Nullam ornare purus quis mauris venenatis, vitae consequat mauris interdum.</p>
    </>
  )
}

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. TEST +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

describe('Parts: Card', () => {

  // 3.1. RENDER WITHOUT PROPS .................................................

  test('renders correctly without any props', () => {
    const tree = renderer.create(
      <Card />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 3.1. END ..................................................................

  // 3.2. RENDER WITH ALL PROPS ................................................

  test('renders correctly with all props', () => {
    const tree = renderer.create(
      <Card { ...props } />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 3.1. END ..................................................................

});

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
