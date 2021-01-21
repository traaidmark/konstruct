import React from 'react';

import Section from '../../../buckets/section/src';
import mdx from './doc.mdx';
export default {
  title: '02 Buckets/Section',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Section,
};
export const Demo = (args) => (
  <>
    <Section { ...args }>
      <p>Sed tristique malesuada arcu dignissim molestie. Maecenas interdum accumsan risus. In finibus lorem massa, eu accumsan tortor imperdiet nec. Proin dictum malesuada elit, varius euismod urna aliquet nec. Ut ornare libero nisl, in imperdiet arcu molestie non. Curabitur vel orci placerat, molestie nisl eget, lacinia felis. Sed malesuada, diam sit amet convallis semper, mi neque ullamcorper enim, a porttitor velit dui eget leo. Ut laoreet nibh vitae bibendum tristique. Vestibulum non tempus purus, nec scelerisque magna. Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>
    </Section>
  </>
);

Demo.args = {
  headerTitle: 'Why we are so great',
  headerText: <>Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex <strong>consequat ultrices.</strong></>,
  footerTitle: 'Sign up today!',
  footerActions: [
    <a>Link 1</a>,
    <a>Link 2</a>,
  ]
};
