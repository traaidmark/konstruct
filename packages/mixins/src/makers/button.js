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

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const makeSize = (SIZE) => {
  switch(SIZE) {
    case 'small':
      return `
        padding: 5px var(--gutter-small);
        ${ _setFontSize('small') }
      `;
    case 'large':
      return `
        padding: var(--gutter-small) var(--gutter);
        ${ _setFontSize('medium') }
      `;
    default:
      return `
        padding: var(--gutter-small) var(--gutter);
      `;
  }
}


export default (theme, size) => `

  display: flex;

  width: fit-content;

  ${ makeSize(size) }

  background-color: var(--btn-${ theme }--bg);
  color: var(--btn-${ theme }--color)!important;

  font-weight: var(--weight-bold);
  font-family: var(--family-secondary);

  border: solid 2px var(--btn-${ theme }--border);
  border-radius: var(--radius-small);

  box-shadow: none;
  transform: translateY(0) scale(1);

  transition: var(--transition-fast);

  &:hover {

    color: var(--btn-${ theme }--colorH)!important;
    background-color: var(--btn-${ theme }--bgH);
    border-color: var(--btn-${ theme }--borderH);

    box-shadow: 1px 1px 10px rgba(0,0,0, 0.3);
    transform: translateY(-2px) scale(1.02);
  }

  &:disabled {
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
      color: var(--btn-${ theme }--colorH)!important;
      background-color: var(--btn-${ theme }--bg)!important;
      border-color: var(--btn-${ theme }--border)!important;

      box-shadow: none;
      transform: translateY(0px) scale(1);
    }
  }

`;

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// END OF FILE #################################################################
