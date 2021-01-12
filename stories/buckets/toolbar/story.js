// PARTS - FLAG ################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import '../../../packages/foundation/src/index.css';
import Section from '../../../packages/buckets/section/src';

import Toolbar from '../../../packages/buckets/toolbar/src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Bucket: Toolbar',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Toolbar,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. DEMO ...................................................................

export const Demo = (args) => (
  <>
    <Section>
      <Toolbar { ...args } />
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
  heading: 'Why we are so great',
  headingAs: undefined,
  text: <>Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien.</>,
  actions: [
    <a>Sign Up now</a>,
    <a>Do this other thing</a>
  ],
};

// 3.1. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
