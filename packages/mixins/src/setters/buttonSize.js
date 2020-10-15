// MIXINS [ SET > BUTTON SIZE ] ################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. INTERNAL DEPENDENCIES ..................................................

import _setFontSize from './fontSize';

// 1.1. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.1. MAKE SIZE ..............................................................

const setSize = (SIZE) => {
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

// 2.1. END ....................................................................

// 2.2. MAKE ICON SIZE .........................................................

const setIconSize = (SIZE) => {
  switch(SIZE) {
    case 'small':
      return `

        width: calc(var(--gutter) + 5px) !important;
        height: calc(var(--gutter) + 5px) !important;

        border-width: 1px !important;

        svg {
          width: calc(var(--gutter) - 2px);
          height: calc(var(--gutter) - 2px);
        }

      `;
    case 'medium':
      return `

        width: 50px!important;
        height: 50px!important;

        svg {
          width: calc(50px - 10px);
          height: calc(50px - 10px);
        }

      `;
    case 'large':
      return `

        width: var(--gutter-large)!important;
        height: var(--gutter-large)!important;

        svg {
          width: calc(var(--gutter-large) - 10px);
          height: calc(var(--gutter-large) - 10px);
        }

      `;
    default:
      return `

        width: var(--gutter-medium)!important;
        height: var(--gutter-medium)!important;

        svg {
          width: calc(var(--gutter-medium) - 15px);
          height: calc(var(--gutter-medium) - 15px);
        }

      `;
  };
};

// 2.2. END ....................................................................

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. MIXIN ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default (
  isIcon = undefined,
  size = undefined,
) => {
  if (isIcon === undefined || size === undefined) {
    throw new Error('_setButtonSize: Parameters are missing or incomplete.');
  };
  return isIcon ? setIconSize(size) : setSize(size);
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
