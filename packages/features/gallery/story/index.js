// FEATURE [ GALLERY > STORY ] #################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import props from '../test/props';

import mdx from './doc.mdx';

import Grid from '../../../buckets/grid/src';
import Section from '../../../buckets/section/src';

import Gallery from '../src/index';
import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Features/Gallery',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Gallery,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. REACT VERSION ..........................................................

export const inReact = (args) => {


  return (
    <>
      <Section>
        <Gallery { ...args } />
        </Section>
      <Section 
        headerTitle="Usage Information"
      >
        <Source
          code={dedent`
          <Block
            heading=""
            actions={ [<a>Link</a>] }
          >
          ...
          </Block>
          `}
        />
      </Section>
    </>
  )
};

inReact.args = props;

// 3.1. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
