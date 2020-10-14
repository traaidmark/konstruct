// PARTS [ BUTTON ] ############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import List from '../../../storybook-components/List';

import Foundation from '../../../packages/foundation/src';
import { Button } from '../../../packages/parts/src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Parts/Button',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Button,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. TEXT LINK ..............................................................

export const Links = (args) => (
  <Foundation>
    <h3>Text Link</h3>
    <List>
      <li><Button to="https://google.com">Link without variant</Button></li>
      <li><Button variant="primary" to="https://google.com">Link with variant</Button></li>
    </List>
    <h3>Code</h3>
    <Source
      code={dedent`
      <Button
        variant="primary"
        to="https://traaidmark.com"
        target="_blank"
      >
        Link Label
      </Button>
      `}
    />
  </Foundation>
);
Links.args = {
  children: 'Button Text',
  variant: 'primary',
  size: 'default',
};

// 3.1. END ....................................................................

// 3.2. TEXT BUTTON ............................................................

export const Buttons = (args) => (
  <Foundation>
    <h3>Text Buttons</h3>
    <List>
      <li><Button>Button without variant</Button></li>
      <li><Button variant="primary">Button with variant</Button></li>
    </List>
    <h3>Code</h3>
    <Source
      code={dedent`
      <Button
        variant="primary"
        onClick={ () => console.log('Click happened!') }
        type="submit"
      >
        Link Label
      </Button>
      `}
    />
  </Foundation>
);
Buttons.args = {
  children: 'Button Text',
  variant: 'primary',
  size: 'default',
};

// 3.2. END ....................................................................

// 3.3. BUTTON SIZES ...........................................................

export const Sizes = (args) => (
  <Foundation>
    <h3>Text Sizes</h3>
    <List>
      <li><Button variant="primary" size="small">Small Size</Button></li>
      <li><Button variant="primary" size="default">Default Size</Button></li>
      <li><Button variant="primary" size="large">Large Size</Button></li>
    </List>
  </Foundation>
);

// 3.3. END ....................................................................

// 3.3. DEFAULT STYLES .........................................................

export const DefaultStyles = (args) => (
  <Foundation>
    <h3>Primary Text Styles</h3>
    <List>
      <li><Button variant="primary">{ args.children }</Button></li>
      <li><Button variant="primary-danger">{ args.children }</Button></li>
      <li><Button variant="primary-warning">{ args.children }</Button></li>
      <li><Button variant="primary-success">{ args.children }</Button></li>
    </List>
    <h3>Secondary Text Styles</h3>
    <List>
      <li><Button variant="secondary">{ args.children }</Button></li>
      <li><Button variant="secondary-danger">{ args.children }</Button></li>
      <li><Button variant="secondary-warning">{ args.children }</Button></li>
      <li><Button variant="secondary-success">{ args.children }</Button></li>
    </List>
  </Foundation>
);
DefaultStyles.args = {
  children: 'Link Text',
  variant: 'secondary',
  size: 'default',
};

// 3.3. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
