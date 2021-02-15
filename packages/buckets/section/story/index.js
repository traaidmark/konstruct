// BUCKET [ GRID > STORY ] #####################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import Props from '../test/props';

import Section from '../src';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Buckets/Section',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Section,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. HTML VERSION ...........................................................

export const inHtml = (args) => (
  <>

    <section className="b-section"> 
      <header className="b-section__header">
        <h2>Default Section</h2>
        <p>Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>
      </header>
      <p>Sed tristique malesuada arcu dignissim molestie. Maecenas interdum accumsan risus. In finibus lorem massa, eu accumsan tortor imperdiet nec. Proin dictum malesuada elit, varius euismod urna aliquet nec. Ut ornare libero nisl, in imperdiet arcu molestie non. Curabitur vel orci placerat, molestie nisl eget, lacinia felis. Sed malesuada, diam sit amet convallis semper, mi neque ullamcorper enim, a porttitor velit dui eget leo. Ut laoreet nibh vitae bibendum tristique. Vestibulum non tempus purus, nec scelerisque magna. Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>
      <footer className="b-section__footer">
        <h3>This is a call to action header</h3>
        <ul class="u-list-horizontal u-list-horizontal--center">
          <li><a href="">Action Link</a></li>
          <li><a href="">Action Link</a></li>
        </ul>
      </footer>
    </section>
    
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <section className="b-section">
          <header className="b-section__header">
            <h2>Default Section</h2>
            <p>Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>
          </header>
          ...
          <footer className="b-section__footer">
            <h3>This is a call to action header</h3>
            <ul class="u-list-horizontal u-list-horizontal--center">
              <li><a href="">Action Link</a></li>
              <li><a href="">Action Link</a></li>
            </ul>
          </footer>
        </section>
        `}
      />
    </Section>
  </>
);

// 3.1. END ....................................................................

// 3.3. BUCKETS ................................................................

export const inReact = (args) => (
  <>
    <Section { ...args }>
      <p>Sed tristique malesuada arcu dignissim molestie. Maecenas interdum accumsan risus. In finibus lorem massa, eu accumsan tortor imperdiet nec. Proin dictum malesuada elit, varius euismod urna aliquet nec. Ut ornare libero nisl, in imperdiet arcu molestie non. Curabitur vel orci placerat, molestie nisl eget, lacinia felis. Sed malesuada, diam sit amet convallis semper, mi neque ullamcorper enim, a porttitor velit dui eget leo. Ut laoreet nibh vitae bibendum tristique. Vestibulum non tempus purus, nec scelerisque magna. Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <Section
          headerTitle='Why we are so great'
          headerText={<>Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex <strong>consequat ultrices.</strong></>}
          footerTitle="Sign up today!"
          footerActions={
            [
              <a>Link 1</a>,
              <a>Link 2</a>,
            ]
          }
        >
          ...
        </Section>
        `}
      />
    </Section>
  </>
);

inReact.args = Props;

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
