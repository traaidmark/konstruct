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

import Data from '../src';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Parts/Data',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Data,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. HTML VERSION ...........................................................

export const inHtml = (args) => (
  <>
    <Section>
      <div className="p-data">
        <i>USD</i>
        <strong>300.00</strong>
      </div>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <div className="p-data">
          <i>USD</i>
          <strong>300.00</strong>
        </div>
        `}
      />
    </Section>
  </>
);

// 3.1. END ....................................................................

// 3.2. REACT VERSION ..........................................................

export const inReact = (args) => (
  <>
    <Section>
      <ul className="u-list-horizontal">
        <li><Data { ...args } /></li>
      </ul>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <Data
          prefix="usd"
          value="2300.00"
        />
        `}
      />
    </Section>
  </>
);

inReact.args = {
  prefix: 'usd',
  value: '2300.00',
};

// 3.2. END ....................................................................

// 3.3. VARIATIONS .............................................................

export const variations = (args) => (
  <>
    <Section>
      <ul className="u-list-horizontal">
        <li>
          <div className="p-data p-data--small">
            <i>USD</i>
            <strong>300.00</strong>
          </div>
        </li>
        <li>
          <div className="p-data">
            <i>USD</i>
            <strong>300.00</strong>
          </div>
        </li>
        <li>
          <div className="p-data p-data--large">
            <i>USD</i>
            <strong>300.00</strong>
          </div>
        </li>
      </ul>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <div className="p-data p-data--small">...</div>
        <div className="p-data">...</div>
        <div className="p-data p-data--large">...</div>
        `}
      />
    </Section>
  </>
);

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
