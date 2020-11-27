// MEDIA [ GALLERY > TESTS ] ###################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Gallery from '.';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. PROPS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const props = {
  images: [
    "https://s3.eu-central-1.amazonaws.com/api-documents-service-public-prd/c9aa14dd-faf1-498c-95e0-e7a960fa5fa2.jpg",
    "https://s3.eu-central-1.amazonaws.com/api-documents-service-public-prd/3c5bf569-6bab-42a8-9106-715932ad8c0d.jpg",
    "https://s3.eu-central-1.amazonaws.com/api-documents-service-public-prd/d27c20af-2724-4ba0-8f44-90a5da719039.jpg",
    "https://s3.eu-central-1.amazonaws.com/api-documents-service-public-prd/e8703d4a-7485-4d66-b976-e69c842d4037.jpg",
    "https://s3.eu-central-1.amazonaws.com/api-documents-service-public-prd/560afd67-11b6-49b0-952e-a528e27cba8a.jpg",
    "https://s3.eu-central-1.amazonaws.com/api-documents-service-public-prd/46304cf5-87dc-454e-b86a-7ab90f67a083.jpg"
  ]
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. TEST +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

describe('Media: Gallery', () => {

  // 3.1. RENDER WITHOUT PROPS .................................................

  test('renders correctly without any props', () => {
    const tree = renderer.create(
      <Gallery />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 3.1. END ..................................................................

  // 3.2. RENDER WITH ALL PROPS ................................................

  test('renders correctly with all props', () => {
    const tree = renderer.create(
      <Gallery { ...props } />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 3.2. END ..................................................................

});

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
