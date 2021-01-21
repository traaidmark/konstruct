// PARTS - DATA ################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import '../../../foundation-css/src/index.css';
import '../src/buttons.css';

import Section from '../../../buckets/section/src';
import Grid from '../../../buckets/grid/src';

import List from '../../../../storybook-components/List';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: '03 Parts/CSS',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. BUTTON .................................................................

export const Button = (args) => (
  <>
    <Section noLeft noRight noTop>
      <h3>Primary Buttons</h3>
      <List>
        <li>
          <a href="#" className="part-button">Primary Button</a>
        </li>
        <li>
          <a href="#" className="part-button part-button-danger">Dangerous Action</a>
        </li>
        <li>
          <a href="#" className="part-button part-button-warning">Careful Action</a>
        </li>
        <li>
          <a href="#" className="part-button part-button-safe">Safe Action</a>
        </li>
      </List>
      <h4>Code</h4>
      <Source
        code={dedent`
        <a href="#" className="part-button">Button</a>
        <a href="#" className="part-button part-button-danger">Button</a>
        <a href="#" className="part-button part-button-warning">Button</a>
        <a href="#" className="part-button part-button-safe">Button</a>
        `}
      />
    </Section>
    <Section noLeft noRight noTop>
      <h3>Button Sizes</h3>
      <List>
        <li>
          <a href="#" className="part-button part-button-small">Small Button</a>
        </li>
        <li>
          <a href="#" className="part-button part-button-primary">Default Button</a>
        </li>
        <li>
          <a href="#" className="part-button part-button-large">Large Button</a>
        </li>
      </List>
      
      <h4>Code</h4>
      <Source
        code={dedent`
        <a href="#" className="part-button part-button-small">Button</a>
        <a href="#" className="part-button part-button-large">Button</a>
        `}
      />
    </Section>
    <Section noLeft noRight noTop>
      <h3>Full width button</h3>
      <a href="#" className="part-button part-button-full">Full width Button</a>
      <br />
      
      <h4>Code</h4>
      <Source
        code={dedent`
        <a href="#" className="part-button part-button-full">Button</a>
        `}
      />
    </Section>
  </>
);

// 3.1. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
