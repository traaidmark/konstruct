// PARTS - DATA ################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import List from '../../../../storybook-components/List';

import '../../../foundation-css/src/index.css';
import Data from '../../../parts/data/src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: '03 Parts/Data',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Data,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. DEMO ...................................................................

export const Demo = (args) => (
  <>
    <List>
      <li>
        <Data { ...args }/>
      </li>
    </List>
    <h3>Code</h3>
    <Source
      code={dedent`
      <Data
        prefix="usd"
        value="2300.00"
        size="default"
      />
      `}
    />
  </>
);
Demo.args = {
  size: 'default',
  prefix: 'usd',
  value: '2300.00',
};

// 3.1. END ....................................................................

// 3.2. SIZES ..................................................................

export const Sizes = (args) => (
  <>
    <List>
      <li>
        <Data prefix="usd" value="46000.00" size="small" />
      </li>
      <li>
        <Data prefix="usd" value="46000.00" size="default" />
      </li>
      <li>
        <Data prefix="usd" value="46000.00" size="large" />
      </li>
    </List>
  </>
);

// 3.2. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
