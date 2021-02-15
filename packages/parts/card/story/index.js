// PART [ CARD > STORY ] #######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';


import Section from '../../../buckets/section/src';
import Grid from '../../../buckets/grid/src';

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
        <div className="p-card__body">
          <h3>This is maybe a very long title and isn't that just great?</h3>
          <p>In et sollicitudin dolor. Integer ut eleifend libero. Integer nec tellus a turpis porta posuere a non justo. Curabitur consequat sit amet augue ut aliquam. Quisque eu lobortis nibh, vitae fringilla dolor.</p>
        </div>
      </article>
    </Grid>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <div className="b-grid">
          <aside>...</aside>
          <aside>...</aside>
        </div>
        `}
      />
    </Section>
  </>
);

// 3.1. END ....................................................................

// 3.3. BUCKETS ................................................................

export const inReact = (args) => (
  <>
    <Grid { ...args }>
      <div>
        <p>Sed tristique malesuada arcu dignissim molestie. Maecenas interdum accumsan risus. In finibus lorem massa, eu accumsan tortor imperdiet nec. Proin dictum malesuada elit, varius euismod urna aliquet nec. Ut ornare libero nisl, in imperdiet arcu molestie non. Curabitur vel orci placerat, molestie nisl eget, lacinia felis. Sed malesuada, diam sit amet convallis semper, mi neque ullamcorper enim, a porttitor velit dui eget leo. Ut laoreet nibh vitae bibendum tristique. Vestibulum non tempus purus, nec scelerisque magna. Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>
      </div>
      <div>
        <p>Sed tristique malesuada arcu dignissim molestie. Maecenas interdum accumsan risus. In finibus lorem massa, eu accumsan tortor imperdiet nec. Proin dictum malesuada elit, varius euismod urna aliquet nec. Ut ornare libero nisl, in imperdiet arcu molestie non. Curabitur vel orci placerat, molestie nisl eget, lacinia felis. Sed malesuada, diam sit amet convallis semper, mi neque ullamcorper enim, a porttitor velit dui eget leo. Ut laoreet nibh vitae bibendum tristique. Vestibulum non tempus purus, nec scelerisque magna. Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>
      </div>
    </Grid>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <Grid
          columns={
            ['1fr 1fr', '1fr 1fr', '1fr 1fr', '1fr',]
          }
          gutters={
            ['var(--gutter-large)', 'var(--gutter-medium)', 'var(--gutter)', 'var(--gutter-small)']
          } 
        >
          <aside>...</aside>
          <aside>...</aside>
        </Grid>
        `}
      />
    </Section>
  </>
);

inReact.args = {
  columns: ['1fr 1fr', '1fr 1fr', '1fr 1fr', '1fr',],
  gutters: ['var(--gutter-large)', 'var(--gutter-medium)', 'var(--gutter)', 'var(--gutter-small)'],
};

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
