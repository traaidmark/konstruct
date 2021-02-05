// PARTS - FLAG ################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import List from '../../../../storybook-components/List';

import Flag from '../../../parts/flag/src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: '03 Parts/Flag',
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
      <li><Flag { ...args } className="p-flag--info" /></li>
      <li><Flag { ...args } className="p-flag--new" /></li>
      <li><Flag { ...args } className="p-flag--aware" /></li>
      <li><Flag { ...args } className="p-flag--important" /></li>
    </List>
    <h4>Code</h4>
    <Source
      code={dedent`
      <Flag text="03" />
      <Flag text="03" className="p-flag--info" />
      <Flag text="03" className="p-flag--new" />
      <Flag text="03" className="p-flag--aware" />
      <Flag text="03" className="p-flag--important" />
      `}
    />
  </>
);
Demo.args = {
  text: '03',
};

// 3.1. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
