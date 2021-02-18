// PART [ NOTIFICATION > STORY ] ###############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';
import Props from '../test/props';


import Section from '../../../buckets/section/src';
import Grid from '../../../buckets/grid/src';

import Notification from '../src/';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Parts/Notification',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Notification,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. HTML VERSION ...........................................................

export const inHtml = (args) => (
  <>
    <Section>
      <aside className="p-notification">
        <p>Mauris tincidunt commodo ligula, quis consequat nibh. Curabitur blandit felis convallis facilisis congue. Morbi nec rhoncus dolor, ac eleifend tortor.</p>
      </aside>
    </Section>
    <Section>
      <aside className="p-notification">
        <figure className="p-notification__icon">
          <img src="https://s3.amazonaws.com/assets.wealthpoint.app/images/icons/cat-risk-core.svg" />
        </figure>
        <p>Mauris tincidunt commodo ligula, quis consequat nibh. Curabitur blandit felis convallis facilisis congue. Morbi nec rhoncus dolor, ac eleifend tortor.</p>
      </aside>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <aside className="p-notification">
          <figure className="p-notification__icon">
            <img src="https://s3.amazonaws.com/assets.wealthpoint.app/images/icons/cat-risk-core.svg" />
          </figure>
          <p>Mauris tincidunt commodo ligula, quis consequat nibh. Curabitur blandit felis convallis facilisis congue. Morbi nec rhoncus dolor, ac eleifend tortor.</p>
        </aside>
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
      <Notification { ...args } />
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <Notification icon="" />
          <p>...</p>
        </Notification>
        `}
      />
    </Section>
  </>
);

inReact.args = Props;

// 3.2. END ....................................................................

// 3.3. REACT VERSION ..........................................................

export const variations = (args) => (
  <>
    <Section className="b-section--noBottom">
      <Notification { ...args } className="p-notification--shadowed" />
    </Section>
    <Section className="b-section--noBottom">
      <Notification { ...args } className="p-notification--info" />
    </Section>
    <Section className="b-section--noBottom">
      <Notification { ...args } className="p-notification--success" />
    </Section>
    <Section className="b-section--noBottom">
      <Notification { ...args } className="p-notification--warning" />
    </Section>
    <Section>
      <Notification { ...args } className="p-notification--important" />
    </Section>
  </>
);

variations.args = Props;

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
