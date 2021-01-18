// FORM [ FIELD > STORY ] ######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import '../../../foundation-css/src/index.css';

import TextField from '../src';

import Section from '../../../buckets/section/src';
import Grid from '../../../buckets/grid/src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: '05: Form: Field',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: TextField,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. DEMO ...................................................................

export const Text = (args) => (
  <Section>
    <h2>TextField</h2>
    <Grid>
      <aside>
        <TextField
          name="name"
          label="First Name"
          placeholder="Your first name"
        />
      </aside>
      <aside>
        <small><code>disabled</code></small>
        <TextField
          name="name1"
          label="First Name"
          placeholder="Your first name"
          disabled
        />
      </aside>
      <aside>
        <small><code>hasError / message=""</code></small>
        <TextField
          name="name3"
          label="First Name"
          placeholder="Your first name"
          hasError
          message="This name is not a real name dude..."
        />
      </aside>
      <aside>
        <small><code>prefix=""</code></small>
        <TextField
          name="amount"
          label="Amount"
          prefix="ZAR"
          placeholder="100.00"
        />
      </aside>
      <aside>
        <small><code>postfix=""</code></small>
        <TextField
          name="pay"
          label="What do you want to pay?"
          placeholder="0.00"
          postfix="pm"
        />
      </aside>
      <aside>
        <small><code>message=""</code></small>
        <TextField
          name="password"
          label="password"
          placeholder="Your password"
          type="password"
          message="Your password must be at least 10 characters long"
        />
      </aside>
    </Grid>
  </Section>
);

// 3.1. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
