// PART [ ICON BUTTON > STORY ] ################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

import {
  EditIcon
} from '@wealthmigrate/architect-icons';
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import Section from '../../../buckets/section/src';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Parts/Icon Button',
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
        <a href="#" className="p-icon-button">
          <EditIcon />
        </a>
      </li>
      <li>
        <a href="#" className="p-icon-button p-icon-button--danger">
          <EditIcon />
        </a>
      </li>
      <li>
        <a href="#" className="p-icon-button p-icon-button--warning">
          <EditIcon />
        </a>
      </li>
      <li>
        <a href="#" className="p-icon-button p-icon-button--safe">
          <EditIcon />
        </a>
      </li>
      <li>
        <button href="#" className="p-icon-button" disabled>
          <EditIcon />
        </button>
      </li>
      </ul>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <a href="#" className="p-icon-button">
          <EditIcon />
        </a>
        <a href="#" className="p-icon-button p-icon-button--danger">
          <EditIcon />
        </a>
        <a href="#" className="p-icon-button p-icon-button--warning">
          <EditIcon />
        </a>
        <a href="#" className="p-icon-button p-icon-button--safe">
          <EditIcon />
        </a>
        <button href="#" className="p-icon-button" disabled>
          <EditIcon />
        </button>
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
          <a href="#" className="p-icon-button p-icon-button--small">
            <EditIcon />
          </a>
        </li>
        <li>
          <a href="#" className="p-icon-button">
            <EditIcon />
          </a>
        </li>
        <li>
          <a href="#" className="p-icon-button p-icon-button--large">
            <EditIcon />
          </a>
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
  </>
);

// 3.2. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
