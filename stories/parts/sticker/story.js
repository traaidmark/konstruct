// PARTS - DATA ################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import List from '../../../storybook-components/List';

import Foundation from '../../../packages/foundation/src';
import Sticker from '../../../packages/parts/sticker/src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Part: Sticker',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Sticker,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. DEMO ...................................................................

export const Demo = (args) => (
  <Foundation>
    <List>
      <li>
        <Sticker { ...args }/>
      </li>
    </List>
    <h3>Code</h3>
    <Source
      code={dedent`
      <Sticker
        label="Amount"
        prefix="usd"
        value="23.00"
        size="default"
        align: "left"
        placement: "top"
      />
      `}
    />
  </Foundation>
);
Demo.args = {
  size: 'default',
  prefix: 'usd',
  value: '2300.00',
  label: 'Amount',
  align: 'left',
  placement: 'top',
};

// 3.1. END ....................................................................

// 3.2. VARIANTS ...............................................................

export const Variants = (args) => (
  <Foundation>
    <h3>Size variations:</h3>
    <List>
      <li>
        <Sticker {...args} size="small" />
      </li>
      <li>
        <Sticker {...args} size="default" />
      </li>
      <li>
        <Sticker {...args} size="large" />
      </li>
    </List>
    <h3>Horizontal label alignment variations:</h3>
    <List>
      <li>
        <Sticker {...args} align="left" />
      </li>
      <li>
        <Sticker {...args} align="center" />
      </li>
      <li>
        <Sticker {...args} align="right" />
      </li>
    </List>
    <h3>Vertical label placement variations:</h3>
    <List>
      <li>
        <Sticker {...args} placement="top" />
      </li>
      <li>
        <Sticker {...args} placement="bottom" />
      </li>
    </List>
  </Foundation>
);

Variants.args = {
  prefix: 'usd',
  value: '2300.00',
  label: 'Amount',
  placement: 'top',
};

// 3.2. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
