// FEATURE [ TOOLBAR > STORY ] #################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source, ArgsTable } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';


import Section from '../../../buckets/section/src';
import Toolbar from '../src';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Features/Toolbar',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Toolbar,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. HTML VERSION ...........................................................

export const inHtml = (args) => (
  <>
    <header className="f-toolbar">
      <div className="f-toolbar__content">
        <h1>This is heading</h1> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula ante orci, eu consectetur risus faucibus faucibus. Fusce varius porta tortor eu ullamcorper.</p>
      </div>
      <ul className="f-toolbar__actions u-list-horizontal">
        <li><a>Action 1</a></li>
        <li><a>Action 2</a></li>
      </ul>
    </header>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <header className="f-toolbar">
          <div className="f-toolbar__content">
            <h1>This is heading</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula ante orci, eu consectetur risus faucibus faucibus. Fusce varius porta tortor eu ullamcorper.</p>
          </div>
          <ul className="f-toolbar__actions u-list-horizontal">
            <li><a>Action 1</a></li>
            <li><a>Action 2</a></li>
          </ul>
        </header>
        `}
      />
    </Section>
  </>
);

// 3.1. END ....................................................................

// 3.3. BUCKETS ................................................................

export const inReact = (args) => (
  <>
    <Toolbar { ...args } />
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <Toolbar
          heading='This is a heading',
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula ante orci, eu consectetur risus faucibus faucibus. Fusce varius porta tortor eu ullamcorper.',
          actions={[
            <a>Link 1</a>,
            <a>Link 2</a>
          ]}
        />
        `}
      />
    </Section>
  </>
);

inReact.args = {
  heading: 'This is a heading',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula ante orci, eu consectetur risus faucibus faucibus. Fusce varius porta tortor eu ullamcorper.',
  actions: [
    <a>Link 1</a>,
    <a>Link 2</a>
  ]
};

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
