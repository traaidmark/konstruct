// PART [ PERSON > STORY ] #####################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';


import Section from '../../../buckets/section/src';

import Person from '../src';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Parts/Person',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Person,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. HTML VERSION ...........................................................

export const inHtml = (args) => (
  <>
    <Section>
      <aside className="p-person">
        <figure>
          <img src="https://s3.amazonaws.com/cdn.wealthpoint.app/person_aubrey_f6ce6120a8.jpg" alt="Aubrey Turner" />
        </figure>
        <strong>Aubrey Turner</strong>
        <small>Chief Growth Officer</small>
      </aside>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <aside className="p-person">
          <figure>
            <img src="" alt="" />
          </figure>
          <strong>...</strong>
          <small>...</small>
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
      <ul className="u-list-horizontal">
        <li><Person { ...args } /></li>
      </ul>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <Person
          prefix="usd"
          value="2300.00"
        />
        `}
      />
    </Section>
  </>
);

inReact.args = {
  name: 'Aubrey Turner',
  role: 'Chief Growth Officer',
  imgSrc: 'https://s3.amazonaws.com/cdn.wealthpoint.app/person_aubrey_f6ce6120a8.jpg',
  className: '',
};

// 3.2. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
