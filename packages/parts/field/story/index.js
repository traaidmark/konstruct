// PART [ FIELD > STORY ] ######################################################

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

import Field from '../src/';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Parts/Field',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Field,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. HTML VERSION ...........................................................

export const inHtml = (args) => (
  <>
    <Section>
      <Grid
          columns={ [
            '1fr 1fr 1fr 1fr',
            '1fr 1fr 1fr',
            '1fr 1fr',
            '1fr',
          ] }
        >
          <div className="f-input">
            <label for="name">Name</label>
            <div className="f-input__content">
              <input type="text" name="name" placeholder="Your name please" />
            </div>
          </div>
          <div className="f-input">
            <label for="name">Name</label>
            <div className="f-input__content">
              <input type="text" name="name" placeholder="Your name please" />
            </div>
            <small>This is helpful message.</small>
          </div>
          <div className="f-input f-input--hasError">
            <label for="name">Name</label>
            <div className="f-input__content">
              <input type="text" name="name" placeholder="Your name please" className="hasError" />
            </div>
            <small>This is an error message</small>
          </div>
        </Grid>
    </Section>

    <Section headerTitle="with prepend / postpend">
      <Grid
          columns={ [
            '1fr 1fr 1fr 1fr',
            '1fr 1fr 1fr',
            '1fr 1fr',
            '1fr',
          ] }
        >
          <div className="f-input">
            <label for="amount">Amount</label>
            <div className="f-input__content">
              <span className="f-input__prepend">US</span>
              <input type="text" name="amount" placeholder="0.00" />
            </div>
          </div>
          <div className="f-input">
            <label for="amount">Amount</label>
            <div className="f-input__content">
              <input type="text" name="amount" placeholder="0.00" />
              <span className="f-input__postpend">/ pm</span>
            </div>
          </div>
          <div className="f-input ">
            <label for="amount">Amount</label>
            <div className="f-input__content">
              <span className="f-input__prepend">US</span>
              <input type="text" name="amount" placeholder="0.00" />
              <span className="f-input__postpend">/ pm</span>
            </div>
          </div>
        </Grid>
    </Section>
    
    
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <div className="f-input ">
          <label for="amount">Amount</label>
          <div className="f-input__content">
            <span className="f-input__prepend">US</span>
            <input type="text" name="amount" placeholder="0.00" />
            <span className="f-input__postpend">/ pm</span>
          </div>
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
    <Grid
      columns={ [
        '1fr 1fr 1fr 1fr',
        '1fr 1fr 1fr',
        '1fr 1fr',
        '1fr',
      ] }
    >
      <Field { ...args } >
        <input type="text" name="amount" placeholder="0.00" />
      </Field>
    </Grid>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <Field
          label="Amount"
          labelFor="amount"
          message="This is your yearly contribution amount."
          prepend="za"
          postpend="/ py"
        >
          <input type="text" name="amount" placeholder="0.00" />
        </Field>
        `}
      />
    </Section>
  </>
);

inReact.args = Props;

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
