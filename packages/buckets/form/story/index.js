// BUCKET [ FORM > STORY ] #####################################################

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

import Form from '../src';

import '../src/stylesheet.css';

import Props from '../test/props';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Buckets/Form',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Form,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. HTML VERSION ...........................................................

export const inHtml = (args) => (
  <>
    <form className="b-form">
      <div className="b-form__body">
        <Grid>
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
          </div>
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
          </div>
        </Grid>
      </div>
      <footer className="b-form__footer">
        <small className="b-form__footer-top-text">This is a top message</small>
        <ul className="u-list-horizontal">
          <li><button className="p-button">Cancel</button></li>
          <li><button className="p-button">Submit</button></li>
        </ul>
        <small className="b-form__footer-bottom-text">This is a bottom message</small>
      </footer>
    </form>
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
    <Form { ...args }>
      <Grid>
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
        </div>
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
        </div>
      </Grid>
    </Form>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <Form { ...args }>
          ...fields...
        </Form>
        `}
      />
    </Section>
  </>
);

inReact.args = Props;

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
