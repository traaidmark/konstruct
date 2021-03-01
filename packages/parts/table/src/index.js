// ARCHITECT-CONTAINERS [ TABLE ] ##############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useState } from 'react';
import propTypes from 'prop-types';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import './stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Table = ({
  data = [],
  header = [],
  headersAsc = {},
  sortBy,
}) => {
  const normaliseKeys = obj => {
    const cloned = obj;
    for (const key in obj) {
      let val = cloned[key];
      delete cloned[key];
      cloned[key.toLowerCase()] = val;
    }
    return cloned;
  }
  // 2.1. FUNCTIONS ............................................................

  // 2.1.1. RENDER HEADER
  const renderHeader = headerData => (
    <thead>
      <tr>
        {
          headerData.map(
            (label, index) => {
              const k = sortBy && label.replace(/\s/g, '').toLowerCase();
            return (
              <th key={ index }>
                {
                  sortBy ? (
                    <button
                      onClick={ () => sortBy(k) }
                      className={ `p-table__sort p-table__sort--${ headersAsc[k] }` }
                    >
                      { label }
                    </button>
                  ) : label
                }
              </th>
            ) }
          )
        }
      </tr>
    </thead>
  );

  // 2.1.1. END

  // 2.1.1. RENDER ROWS

  const renderRows = data => data.map(
    (row, index) => <tr key={ index }>{ renderCells(row) }</tr>
  );

  // 2.1.1. END

  // 2.1.2. RENDER CELLS

  const renderCells = data => Object.keys(data).map(
    (key, index) => <td key={ index }>{data[key]}</td>
  );

  // 2.1.2. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (
    <table className="p-table">
      { renderHeader(header) }
      { renderRows(data.map(e => normaliseKeys(e))) }
    </table>
  );

  // 2.2. END ..................................................................

}

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Table.propTypes = {
  data: propTypes.array,
  header: propTypes.array,
  sortBy: propTypes.func,
}

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Table;

// END OF FILE #################################################################
