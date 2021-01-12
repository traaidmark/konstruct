// PARTS - DATA ################################################################

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
import Grid from '../../../packages/buckets/grid/src';
import Card from '../../../packages/parts/card/src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Part: Card',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Card,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. DEMO ...................................................................

export const Demo = (args) => (
  <>
    <Section style={ { backgroundColor: 'var(--color-light)' } } variantX="wide">
      <Grid largeCols="1fr 1fr 1fr" >
        <Card 
          { ...args }
          imageSrc='https://source.unsplash.com/500x250/?workbench'
          imageAlt='This is a neat title for a card.'
          isInteractive
        />
        <Card
          title="This is a card without image"
          meta={
            [
              '30 Minutes ago...',
              'Uncategorised',
              'Adrian Kirsten'
            ]
          }
          actions={
            [
              <a>Click here!</a>
            ]
          }
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at lorem mi. Nullam ornare purus quis mauris venenatis, vitae consequat mauris interdum.</p>
        </Card>
      </Grid>
    </Section>
    
    <h3>Code</h3>
    <Source
      code={dedent`
      <Card
        imageSrc=""
        imageAlt=""
        title=""
        meta={ [] }
        actions={ [] }
      >
        ...
      </Card>
      `}
    />
  </>
);
Demo.args = {
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
};

// 3.1. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
