// MEDIA [ GALLERY ] ###########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import '../../../foundation-css/src/index.css';
import Section from '../../../buckets/section/src';

import Gallery from '../src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: '05 Blueprints/Gallery',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Gallery,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. DEMO ...................................................................

export const Demo = (args) => (
  <>
    <Section>
      <Gallery { ...args } />
    </Section>
    <h3>Code</h3>
    <Source
      code={dedent`
      <Toolbar
        heading="Why we are so great"
        headingAs={ (props) => <h2 { ...props } }
        text={ <>Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien.</> }
        actions=[
          <a>Sign Up now</a>,
          <a>Do this other thing</a>
        ],
      />
      `}
    />
  </>
  
);

Demo.args = {
  images: [
    "https://s3.eu-central-1.amazonaws.com/api-documents-service-public-prd/c9aa14dd-faf1-498c-95e0-e7a960fa5fa2.jpg",
    "https://s3.eu-central-1.amazonaws.com/api-documents-service-public-prd/3c5bf569-6bab-42a8-9106-715932ad8c0d.jpg",
    "https://s3.eu-central-1.amazonaws.com/api-documents-service-public-prd/d27c20af-2724-4ba0-8f44-90a5da719039.jpg",
    "https://s3.eu-central-1.amazonaws.com/api-documents-service-public-prd/e8703d4a-7485-4d66-b976-e69c842d4037.jpg",
    "https://s3.eu-central-1.amazonaws.com/api-documents-service-public-prd/560afd67-11b6-49b0-952e-a528e27cba8a.jpg",
    "https://s3.eu-central-1.amazonaws.com/api-documents-service-public-prd/46304cf5-87dc-454e-b86a-7ab90f67a083.jpg"
  ]
};

// 3.1. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
