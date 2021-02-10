// BUCKET [ GRID ] #############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source, ArgsTable } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';


import Section from '../../section/src';
import Grid from '../../grid/src';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Buckets/Grid',
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
      <div className="b-grid">
        <div>
          <p>Nam sit amet lorem hendrerit, convallis libero sit amet, faucibus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet eros in magna venenatis condimentum sit amet vitae urna. Vestibulum vitae enim imperdiet, tincidunt lacus volutpat, eleifend massa. Phasellus vitae dictum magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam nisl lacinia congue lobortis. Phasellus tempor mollis commodo. Nunc tristique dui ac nisi rutrum pellentesque. Etiam hendrerit tellus quis est sodales, eu porttitor urna vestibulum. Nulla ante arcu, auctor eget est at, fringilla finibus elit. </p>
        </div>
        <div>
          <p>Nam sit amet lorem hendrerit, convallis libero sit amet, faucibus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet eros in magna venenatis condimentum sit amet vitae urna. Vestibulum vitae enim imperdiet, tincidunt lacus volutpat, eleifend massa. Phasellus vitae dictum magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam nisl lacinia congue lobortis. Phasellus tempor mollis commodo. Nunc tristique dui ac nisi rutrum pellentesque. Etiam hendrerit tellus quis est sodales, eu porttitor urna vestibulum. Nulla ante arcu, auctor eget est at, fringilla finibus elit. </p>
        </div>
      </div>
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
