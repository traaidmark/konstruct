import React from 'react';
import Foundation from '../../../packages/foundation/src';
import Grid from '../../../packages/buckets/grid/src';
import mdx from './doc.mdx';
export default {
  title: 'Bucket: Grid',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Grid,
};
export const Demo = (args) => (
  <Foundation>
    <Grid { ...args }>
      <div>
        <p>Sed tristique malesuada arcu dignissim molestie. Maecenas interdum accumsan risus. In finibus lorem massa, eu accumsan tortor imperdiet nec. Proin dictum malesuada elit, varius euismod urna aliquet nec. Ut ornare libero nisl, in imperdiet arcu molestie non. Curabitur vel orci placerat, molestie nisl eget, lacinia felis. Sed malesuada, diam sit amet convallis semper, mi neque ullamcorper enim, a porttitor velit dui eget leo. Ut laoreet nibh vitae bibendum tristique. Vestibulum non tempus purus, nec scelerisque magna. Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>
      </div>
      <div>
        <p>Sed tristique malesuada arcu dignissim molestie. Maecenas interdum accumsan risus. In finibus lorem massa, eu accumsan tortor imperdiet nec. Proin dictum malesuada elit, varius euismod urna aliquet nec. Ut ornare libero nisl, in imperdiet arcu molestie non. Curabitur vel orci placerat, molestie nisl eget, lacinia felis. Sed malesuada, diam sit amet convallis semper, mi neque ullamcorper enim, a porttitor velit dui eget leo. Ut laoreet nibh vitae bibendum tristique. Vestibulum non tempus purus, nec scelerisque magna. Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>
      </div>
    </Grid>
  </Foundation>
);

Demo.args = {
  smallCols: '1fr',
  smallGutter: 'var(--gutter)',
  mediumCols: '1fr 1fr',
  mediumGutter: 'var(--gutter)',
  largeCols: '1fr 1fr',
  largeGutter: 'var(--gutter)',
};
