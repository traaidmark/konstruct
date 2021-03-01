// FEATURE [ BLOCK > STORY ] ###################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useState } from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import props from '../test/props';

import mdx from './doc.mdx';

import Grid from '../../../buckets/grid/src';
import Section from '../../../buckets/section/src';

import Block from '../src/index';
import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Features/Block',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Block,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. HTML VERSION ...........................................................

export const inHtml = (args) => (
  <>
    <Section>
      <Grid
        columns={ ['1fr 1fr 1fr 1fr', '1fr 1fr 1fr', '1fr 1fr', '1fr'] }
      >
        <aside className="f-block">
          <header className="f-block__header">
            <h4>Header Title</h4>
          </header>
          <ul>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
          </ul>
        </aside>
        <aside className="f-block">
          <header className="f-block__header">
            <h4>Header Title</h4>
            <ul className="u-list-horizontal">
              <li><a>Download</a></li>
            </ul>
          </header>
        </aside>
        <aside className="f-block">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar nunc at sapien fermentum, nec luctus nisl lacinia. In in ullamcorper enim. Pellentesque blandit vestibulum ipsum, in dignissim sapien cursus eu. Ut facilisis auctor orci sit amet iaculis. Proin ut sagittis est. Fusce dignissim eget lectus sed dapibus. Donec venenatis, velit sed egestas bibendum, tortor tellus laoreet arcu, ut blandit ligula magna eu felis. Donec efficitur eu ipsum non commodo. Quisque placerat augue vitae porttitor tempus. Sed elementum felis vitae consequat faucibus. Etiam posuere placerat sodales. Curabitur tempus magna a massa scelerisque, ut congue leo commodo. </p>
        </aside>
      </Grid>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <aside className="f-block">
          <header className="f-block__header">
            <h4>Header Title</h4>
            <ul className="u-list-horizontal">
              <li><a>Download</a></li>
            </ul>
          </header>
        </aside>
        `}
      />
    </Section>
  </>
);

// 3.1. END ....................................................................

// 3.2. REACT VERSION ..........................................................

export const inReact = (args) => {


  return (
    <>
      <Section>
        <Grid
          columns={ ['1fr 1fr 1fr 1fr', '1fr 1fr 1fr', '1fr 1fr', '1fr'] }
        >
          <Block { ...args }><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar nunc at sapien fermentum, nec luctus nisl lacinia. In in ullamcorper enim. </p></Block>
        </Grid>
        </Section>
      <Section 
        headerTitle="Usage Information"
      >
        <Source
          code={dedent`
          <Block
            heading=""
            actions={ [<a>Link</a>] }
          >
          ...
          </Block>
          `}
        />
      </Section>
    </>
  )
};

inReact.args = props;

// 3.2. END ....................................................................

// 3.3. VARIATIONS .............................................................

export const Variations = (args) => {

  return (
    <>
    <Section>
      <Grid
        columns={ ['1fr 1fr 1fr 1fr', '1fr 1fr 1fr', '1fr 1fr', '1fr'] }
      >
        <aside className="f-block f-block--bordered">
          <header className="f-block__header">
            <h4>Header Title</h4>
          </header>
          <ul>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
            <li>List item </li>
          </ul>
        </aside>
        <aside className="f-block f-block--bordered">
          <header className="f-block__header">
            <h4>Header Title</h4>
            <ul className="u-list-horizontal">
              <li><a>Download</a></li>
            </ul>
          </header>
        </aside>
        <aside className="f-block f-block--bordered">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar nunc at sapien fermentum, nec luctus nisl lacinia. In in ullamcorper enim. Pellentesque blandit vestibulum ipsum, in dignissim sapien cursus eu. Ut facilisis auctor orci sit amet iaculis. Proin ut sagittis est. Fusce dignissim eget lectus sed dapibus. Donec venenatis, velit sed egestas bibendum, tortor tellus laoreet arcu, ut blandit ligula magna eu felis. Donec efficitur eu ipsum non commodo. Quisque placerat augue vitae porttitor tempus. Sed elementum felis vitae consequat faucibus. Etiam posuere placerat sodales. Curabitur tempus magna a massa scelerisque, ut congue leo commodo. </p>
        </aside>
      </Grid>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <aside className="f-block f-block--bordered">
          <p>Lorem ipsum dolor sit amet...</p>
        </aside>
        `}
      />
    </Section>
  </>
  )
};

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
