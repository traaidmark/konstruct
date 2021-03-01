// PART [ TABLE > STORY ] ######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useState } from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import props from '../test/props';

import mdx from './doc.mdx';

import Section from '../../../buckets/section/src';

import Table from '../src/index';
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

// 3.2. REACT VERSION ..........................................................



export const inReact = (args) => {

  const [TableData, setTableData] = useState([
    {
      id: '1',
      name: 'Brian',
      lastName: 'Kirsten',
      status: 'Active',
      actions: <a href="">Edit me</a>,
    },
    {
      id: '2',
      name: 'Adrian',
      lastName: 'Zimmer',
      status: 'InActive',
      actions: <a href="">Edit me</a>,
    },
    {
      id: '3',
      name: 'Adrian',
      lastName: 'Kirsten',
      status: 'Active',
      actions: <a href="">Edit me</a>,
    },
    {
      id: '4',
      name: 'Christo',
      lastName: 'Limo',
      status: 'InActive',
      actions: <a href="">Edit me</a>,
    },
  ]);
  const headers = ['ID', 'Name', 'Last Name', 'Status', 'Actions']
  const headersAsc = headers.reduce((o, key) => ({ ...o, [key.replace(/\s/g, '').toLowerCase()]: false}), {} )
  const sortBy = label => {
    const k = label.replace(/\s/g, '').toLowerCase()
    setTableData(TableData.sort((a, b) => {
      const x = a[k]
      const y = b[k]
      if(!headersAsc[k]){
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
      } else {
        if (x < y) {
          return 1;
        }
        if (x > y) {
          return -1;
        }
      }
      return 0;
    }));
    headersAsc[k] = !headersAsc[k];
  };

  return (
    <>
      <Table { ...args } />
      <Section 
        headerTitle="Usage Information"
      >
        <Source
          code={dedent`
          <Table
            header={ headers }
            data={ 
              [
                {
                  id: '1',
                  name: 'Brian',
                  lastName: 'Kirsten',
                  status: 'Active',
                  actions: <a href="">Edit me</a>,
                }
              ]  
            }
          />
          `}
        />
      </Section>
      <Table
        header={ ['ID', 'Name', 'Last Name', 'Status', 'Actions'] }
        data={ TableData }
        headersAsc={ headersAsc }
        sortBy={ (key) => sortBy(key)}
      />
      <Section 
        headerTitle="Usage Information"
      >
        <Source
          code={dedent`
          <Table
            header={ headers }
            data={ TableData }
            headersAsc={ headersAsc }
            sortBy={ (key) => sortBy(key)}
          />
          `}
        />
      </Section>
    </>
  )
};

inReact.args = props;

// 3.2. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
