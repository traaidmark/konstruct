// PART [ FLAG > STORY ] #######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';


import Section from '../../../buckets/section/src';

import Flag from '../src/';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Parts/Flag',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Flag,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. HTML VERSION ...........................................................

export const inHtml = (args) => (
  <>
    <Section>
      <ul className="u-list-horizontal">
        <li>
          <span className="p-flag">flag</span>
        </li>
        <li>
          <span className="p-flag p-flag--info">info</span>
        </li>
        <li>
          <span className="p-flag p-flag--new">new</span>
        </li>
        <li>
          <span className="p-flag p-flag--aware">aware</span>
        </li>
        <li>
          <span className="p-flag p-flag--important">important</span>
        </li>
      </ul>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <span className="p-flag">flag</span>
        <span className="p-flag p-flag--info">info</span>
        <span className="p-flag p-flag--new">new</span>
        <span className="p-flag p-flag--aware">aware</span>
        <span className="p-flag p-flag--important">important</span>
        `}
      />
    </Section>
  </>
);

// 3.1. END ....................................................................

// 3.3. BUCKETS ................................................................

export const inReact = (args) => (
  <>
    <Section>
      <ul className="u-list-horizontal">
        <li><Flag { ...args } /></li>
        <li><Flag { ...args } className="p-flag--info" /></li>
        <li><Flag { ...args } className="p-flag--new" /></li>
        <li><Flag { ...args } className="p-flag--aware" /></li>
        <li><Flag { ...args } className="p-flag--important" /></li>
      </ul>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <Flag text="03" />
        <Flag text="03" className="p-flag--info" />
        <Flag text="03" className="p-flag--new" />
        <Flag text="03" className="p-flag--aware" />
        <Flag text="03" className="p-flag--important" />
        `}
      />
    </Section>
  </>
);

inReact.args = {
  text: '03',
};

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
