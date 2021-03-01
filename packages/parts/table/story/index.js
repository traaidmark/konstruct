// PART [ TABLE > STORY ] ######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import Section from '../../../buckets/section/src';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Parts/Table',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. HTML VERSION ...........................................................

export const inHtml = (args) => (
  <>
    <Section>
      <table className="p-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Transaction</th>
            <th><button className="p-table__sort">Status</button></th>
            <th><button className="p-table__sort p-table__sort--up">Amount</button></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2020-07-09</td>
            <td>this is a product name</td>
            <td>Interest Received</td>
            <td>Open</td>
            <td>400.00</td>
          </tr>
          <tr>
            <td>2020-07-09</td>
            <td>this is a product name</td>
            <td>Interest Received</td>
            <td>Open</td>
            <td>400.00</td>
          </tr>
          <tr>
            <td>2020-07-09</td>
            <td>this is a product name</td>
            <td>Interest Received</td>
            <td>Open</td>
            <td>400.00</td>
          </tr>
          <tr>
            <td>2020-07-09</td>
            <td>this is a product name</td>
            <td>Interest Received</td>
            <td>Open</td>
            <td>400.00</td>
          </tr>
          <tr>
            <td>2020-07-09</td>
            <td>this is a product name</td>
            <td>Interest Received</td>
            <td>Open</td>
            <td>400.00</td>
          </tr>
        </tbody>
      </table>
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <table className="p-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Transaction</th>
            <th><button className="p-table__sort">Status</button></th>
            <th><button className="p-table__sort p-table__sort--up">Amount</button></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2020-07-09</td>
            <td>this is a product name</td>
            <td>Interest Received</td>
            <td>Open</td>
            <td>400.00</td>
          </tr>
        </tbody>
      </table>
        `}
      />
    </Section>
  </>
);

// 3.1. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
