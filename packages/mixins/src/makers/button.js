// MIXINS [ MAKE > BUTTON ] ####################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import {
  _fontSize,
} from '../';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.1. MAKE BUTTON ............................................................

const makeBtn = (v, s) => {
  if (v.includes('icon')) {
    return `
    
      border-radius: 100%;
    
      svg > path {
        fill: var(--btn-${ variant }--color);
        transition: var(--transition-fast);
      }
    
      &.active {
        background-color: var(--btn-${ variant }--bgA);
        border-color: var(--btn-${ variant }--borderA);
    
        svg > path {
          fill: var(--btn-${ variant }--colorA);
        }
      }
    
      &:hover {
        svg > path {
          fill: var(--btn-${ variant }--colorH);
        }
      }
    `;
  };
  return `
    display: flex;

    width: fit-content;

    color: var(--btn-${ variant }--color)!important;

    font-weight: var(--weight-bold);
    font-family: var(--family-secondary);
    
    border-radius: var(--radius-small);

    &:hover {
      color: var(--btn-${ variant }--colorH)!important;
    }
  `;
};

// 2.1. END ....................................................................

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. STYLESHEET +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default (
  variant = 'primary',
) => `

  ${ makeBtn(variant) }

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--btn-${ variant }--bg);
  border: solid 2px var(--btn-${ variant }--border);

  box-shadow: none;
  transform: translateY(0) scale(1);
  transition: var(--transition-fast);

  &:hover {
    
    cursor: pointer;

    background-color: var(--btn-${ variant }--bgH);
    border-color: var(--btn-${ variant }--borderH);

    box-shadow: 1px 1px 10px rgba(0,0,0, 0.3);
    transform: translateY(-2px) scale(1.02);

  }

  &:disabled {
    opacity: 0.8;
    &:hover {
      cursor: not-allowed;
      box-shadow: none;
      transform: translateY(0px) scale(1);
    }
  }

`;

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// END OF FILE #################################################################
