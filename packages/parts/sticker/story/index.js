// PART [ STICKER > STORY ] ####################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import Section from '../../../buckets/section/src';
import Grid from '../../../buckets/grid/src';

import Sticker from '../src';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Parts/Sticker',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Sticker,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. HTML VERSION ...........................................................

export const inHtml = (args) => (
  <>
    <Section>
      <div className="p-sticker">
        <small>Sticker Label</small>
        <div className="p-data">
          <i>USD</i>
          <strong>300.00</strong>
        </div>
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
        <li><Sticker { ...args } /></li>
      </ul>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <Sticker
          label="Amount"
          prefix="usd"
          value="23.00"
        />
        `}
      />
    </Section>
  </>
);

inReact.args = {
  prefix: 'usd',
  value: '2300.00',
  label: 'Amount',
};

// 3.2. END ....................................................................

// 3.3. VARIATIONS .............................................................

export const variations = (args) => (
  <>
    <Section noLeft noRight noTop>
      <h3>Vertical Orientation</h3>
      <Grid>
        <aside>
          <h5><code>part-sticker--top</code></h5>
          <div className="p-sticker p-sticker--top">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
          <Source
            code={dedent`
            <div className="p-sticker p-sticker--top">
              <small>Sticker Label</small>
              <div className="p-data">
                <i>USD</i>
                <strong>300.00</strong>
              </div>
            </div>
            `}
          />
        </aside>
        <aside>
          <h5><code>part-sticker--bottom</code></h5>
          <div className="p-sticker p-sticker--bottom">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
          <Source
            code={dedent`
            <div className="p-sticker p-data--bottom">
              <small>Sticker Label</small>
              <div className="p-data">
                <i>USD</i>
                <strong>300.00</strong>
              </div>
            </div>
            `}
          />
        </aside>
      </Grid>
    </Section>
    <Section noLeft noRight noTop>
      <h3>Horizontal Orientation</h3>
      <Grid>
        <aside>
          <h5><code>part-sticker--left</code></h5>
          <div className="p-sticker p-sticker--left">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
          <Source
            code={dedent`
            <div className="p-sticker p-sticker--left">
              <small>Sticker Label</small>
              <div className="p-data">
                <i>USD</i>
                <strong>300.00</strong>
              </div>
            </div>
            `}
          />
        </aside>
        <aside>
          <h5><code>part-sticker--center</code></h5>
          <div className="p-sticker p-sticker--center">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
          <Source
            code={dedent`
            <div className="p-sticker p-data--center">
              <small>Sticker Label</small>
              <div className="p-data">
                <i>USD</i>
                <strong>300.00</strong>
              </div>
            </div>
            `}
          />
        </aside>
        <aside>
          <h5><code>part-sticker--right</code></h5>
          <div className="p-sticker p-sticker--right">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
          <Source
            code={dedent`
            <div className="p-sticker p-data--right">
              <small>Sticker Label</small>
              <div className="p-data">
                <i>USD</i>
                <strong>300.00</strong>
              </div>
            </div>
            `}
          />
        </aside>
      </Grid>
    </Section>

  </>
);

inReact.args = {
  prefix: 'usd',
  value: '2300.00',
  label: 'Amount',
};

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
