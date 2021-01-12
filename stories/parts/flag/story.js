// PARTS - FLAG ################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import List from '../../../storybook-components/List';

import '../../../packages/foundation/src/index.css';

import Flag from '../../../packages/parts/flag/src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Part: Flag',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Flag,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. DEMO ...................................................................

export const Demo = (args) => (
  <>
    <List>
      <li><Flag { ...args } /></li>
    </List>
    <h3>Code</h3>
    <Source
      code={dedent`
      <Flag
        variant="info"
        text="Info"
      />
      `}
    />
  </>
);
Demo.args = {
  variant: 'info',
  text: 'Info',
};

// 3.1. END ....................................................................

// 3.3. DEFAULT STYLES .........................................................

export const DefaultStyles = (args) => (
  <>
    <List>
      <li><Flag text="info" variant="info" /></li>
      <li><Flag text="new" variant="new" /></li>
      <li><Flag text="warning" variant="warning" /></li>
      <li><Flag text="error" variant="error" /></li>
    </List>
  </>
);

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
