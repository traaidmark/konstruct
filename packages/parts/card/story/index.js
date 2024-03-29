// PART [ CARD > STORY ] #######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';
import Props from '../test/props';


import Section from '../../../buckets/section/src';
import Grid from '../../../buckets/grid/src';

import Card from '../src/';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Parts/Card',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Grid,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. HTML VERSION ...........................................................

export const inHtml = (args) => (
  <>
    <Grid
      columns={ [
        '1fr 1fr 1fr 1fr',
        '1fr 1fr 1fr',
        '1fr 1fr',
        '1fr',
      ] }
    >
      <article className="p-card">
        <figure className="p-card__media">
          <img src="https://source.unsplash.com/500x250/?workbench" alt="image alt text" />
        </figure>
        <div className="p-card__body u-arrow u-arrow--top-left">
          <h3>This is maybe a very long title and isn't that just great?</h3>
          <p>In et sollicitudin dolor. Integer ut eleifend libero. Integer nec tellus a turpis porta posuere a non justo. Curabitur consequat sit amet augue ut aliquam. Quisque eu lobortis nibh, vitae fringilla dolor.</p>
        </div>
      </article>
      <article className="p-card p-card--interactive">
        <figure className="p-card__media">
          <img src="https://source.unsplash.com/500x250/?workbench" alt="image alt text" />
        </figure>
        <div className="p-card__body u-arrow u-arrow--top-left">
          <h3>This is an interactive card - hover me baby!</h3>
          <p>In et sollicitudin dolor. Integer ut eleifend libero. Integer nec tellus a turpis porta posuere a non justo. Curabitur consequat sit amet augue ut aliquam. Quisque eu lobortis nibh, vitae fringilla dolor.</p>
        </div>
      </article>
    </Grid>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <article className="p-card p-card--interactive">
          <figure className="p-card__media">
            <img src="..." alt="..." />
          </figure>
          <div className="p-card__body u-arrow u-arrow--top-left">
            ...
          </div>
        </article>
        `}
      />
    </Section>
  </>
);

// 3.1. END ....................................................................

// 3.3. BUCKETS ................................................................

export const inReact = (args) => (
  <>
    <Grid
      columns={ [
        '1fr 1fr 1fr 1fr',
        '1fr 1fr 1fr',
        '1fr 1fr',
        '1fr',
      ] }
    >
      <Card { ...args } />
      <Card { ...args } />
      <Card { ...args } />
    </Grid>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <Card
          imgSrc=""
          imgAlt=""
        >
          <h3>...</h3>
          <p>...</p>
        </Card>
        `}
      />
    </Section>
  </>
);

inReact.args = Props;

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
