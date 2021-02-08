// PARTS - DATA ################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import '../src/utility-list.css';


import Section from '../../buckets/section/src';
import Grid from '../../buckets/grid/src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: '01 Cement/Utilities',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.3. BUTTON .................................................................

export const PartButton = (args) => (
  <>
    <Section noLeft noRight noTop>
      <h3>Vertical List</h3>
      <ul class="u-list-vertical">
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
      </ul>
      <h4>Code</h4>
      <Source
        code={dedent`
        <ul class="u-list-vertical">
        ...
        </ul>
        `}
      />
    </Section>
    <Section noLeft noRight noTop>
      <h3>Horizontal List</h3>
      <ul class="u-list-horizontal">
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
      </ul>
      <h4>Code</h4>
      <Source
        code={dedent`
        <ul class="u-list-horizontal">
        ...
        </ul>
        `}
      />
    </Section>
    <Section noLeft noRight noTop>
      <Grid>
        <aside>
          <h3>Horizontal List - Divided</h3>
          <ul class="u-list-horizontal u-list--divided">
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
          </ul>
          <h4>Code</h4>
          <Source
            code={dedent`
            <ul class="u-list-horizontal u-list--divided">
            ...
            </ul>
            `}
          />
        </aside>
        <aside>
          <h3>Vertical List - Underlined</h3>
          <ul class="u-list-vertical u-list--underlined">
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
          </ul>
          <h4>Code</h4>
          <Source
            code={dedent`
            <ul class="u-list-vertical">
            ...
            </ul>
            `}
          />
        </aside>
      </Grid>
    </Section>
  </>
);

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
