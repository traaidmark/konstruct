// MIXINS [ MAKE > LIST ] ######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const setDirection = (dir) => {
  if(dir && dir === 'column') {
    return `
      flex-direction: column!important;
      li {
        &:not(:last-child) {
          margin-bottom: var(--gutter-small);
        }
      }
    `;
  };

  return `
    flex-direction: row;
    align-items: center;

    li {
      &:not(:last-child) {
        margin-right: var(--gutter-small);
      }
    }
  `;

};

export default (direction) => `
  display: flex;
  flex-direction: row;

  margin: 0;
  padding: 0;

  list-style: none;

  li {

    &::marker {
      display: none;
    }

    list-style: none;

    &:before {
      display: none;
    }
    &:marker {
      display: none;
    }
    padding-left: 0;
  }

  ${ setDirection(direction) }
    
`;

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// END OF FILE #################################################################
