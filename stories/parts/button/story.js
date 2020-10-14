import React from 'react';
import Foundation from '../../../packages/foundation/src';
import { Button } from '../../../packages/parts/src';
import mdx from './doc.mdx';
export default {
  title: 'Parts/Button',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Button,
};
export const Demo = (args) => (
  <Foundation>
    <Button { ...args } />
  </Foundation>
);

Demo.args = {
  children: 'Button Text',
  variant: 'primary',
  size: 'default',
};
