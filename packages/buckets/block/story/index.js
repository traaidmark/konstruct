// BUCKET - BLOCK ##############################################################

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
import Grid from '../../../buckets/grid/src';

import Block from '../../../buckets/block/src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Bucket: Block',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Block,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. DEMO ...................................................................

export const Demo = (args) => (
  <>
    <Section 
      style={ { backgroundColor: 'var(--color-light)' } } 
      variantX="wide"
    >
      <Grid>
        <Block { ...args }>
          <p>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis convallis eleifend porttitor. Nunc sapien ante, lobortis a magna id, dictum vehicula nibh.</p>
        </Block>
        <Block { ...args } title={ undefined } actions={ undefined }>
          <p>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis convallis eleifend porttitor. Nunc sapien ante, lobortis a magna id, dictum vehicula nibh.</p>
        </Block>
        <Block { ...args }>
          <ul>
            <li>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue.</li>
            <li>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue.</li>
            <li>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue.</li>
            <li>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue.</li>
          </ul>
        </Block>
        <Block { ...args } isScrollable>
          <p>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis convallis eleifend porttitor. Nunc sapien ante, lobortis a magna id, dictum vehicula nibh.</p>
          <p>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis convallis eleifend porttitor. Nunc sapien ante, lobortis a magna id, dictum vehicula nibh.</p>
          <p>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis convallis eleifend porttitor. Nunc sapien ante, lobortis a magna id, dictum vehicula nibh.</p>
          <p>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis convallis eleifend porttitor. Nunc sapien ante, lobortis a magna id, dictum vehicula nibh.</p>
          <p>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis convallis eleifend porttitor. Nunc sapien ante, lobortis a magna id, dictum vehicula nibh.</p>
        </Block>
        <Block { ...args } hasBorder>
          <ul>
            <li>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue.</li>
            <li>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue.</li>
            <li>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue.</li>
            <li>Fusce fringilla fringilla velit at tempor. Ut a odio sit amet nunc tincidunt congue.</li>
          </ul>
        </Block>
      </Grid>
    </Section>
    <h3>Code</h3>
    <Source
      code={dedent`
      <Block
        title="Why we are so great"
        actions=[
          <a>Sign Up</a>
        ],
        isScrollable
        hasBorder
      >
        ...content here
      </Block>
      `}
    />
  </>
  
);

Demo.args = {
  title: 'Why we are so great',
  actions: [
    <a>One</a>,
    <a>Two</a>
  ],
};

// 3.1. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
