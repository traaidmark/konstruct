// PART [ BUTTON > STORY ] #####################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import Section from '../../../buckets/section/src';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Parts/Button',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. HTML VERSION ...........................................................

export const inHtml = (args) => (
  <>
    <Section>
      <ul className="u-list-horizontal">
        <li>
          <a href="#" className="p-button">Primary Button</a>
        </li>
        <li>
          <a href="#" className="p-button p-button--danger">Dangerous Action</a>
        </li>
        <li>
          <a href="#" className="p-button p-button--warning">Careful Action</a>
        </li>
        <li>
          <a href="#" className="p-button p-button--safe">Safe Action</a>
        </li>
      </ul>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <a href="#" className="p-button">Button</a>
        <a href="#" className="p-button p-button--danger">Button</a>
        <a href="#" className="p-button p-button--warning">Button</a>
        <a href="#" className="p-button p-button--safe">Button</a>
        `}
      />
    </Section>
  </>
);

// 3.1. END ....................................................................

// 3.2. HTML VERSION ...........................................................

export const Variations = (args) => (
  <>
    <Section>
      <ul className="u-list-horizontal">
        <li>
          <a href="#" className="p-button p-button--small">Small Button</a>
        </li>
        <li>
          <a href="#" className="p-button p-button--primary">Default Button</a>
        </li>
        <li>
          <a href="#" className="p-button p-button--large">Large Button</a>
        </li>
      </ul>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <a href="#" className="p-button p-button--small">Button</a>
        <a href="#" className="p-button p-button--large">Button</a>
        `}
      />
    </Section>
    <Section>
      <a href="#" className="p-button p-button--full">Full width Button</a>
      <br />
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <a href="#" className="p-button p-button--full">Button</a>
        `}
      />
    </Section>
  </>
);

// 3.2. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
