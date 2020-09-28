// MIXINS [ MAKE > BOX ] #######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import {
  _device,
} from '../';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default (ORIENTATION) => {
  switch(ORIENTATION) {
    case 'left':
      return`
        display: flex;
        align-items: center;
        flex-direction: row-reverse;

        figure {
          margin-right: var(--gutter-medium);
          width: 40%;
        }

        @media ${ _mixin_device.s } {
          display: flex;
          align-items: center;
          flex-direction: column-reverse;

          figure {
            margin: 0;
            width: 100%;
          }
        }

      `;
    case 'right':
      return`
        display: flex;
        align-items: center;
        flex-direction: row;

        figure {
          margin-left: var(--gutter-medium);
          width: 40%;
        }

        @media ${ _mixin_device.s } {
          display: flex;
          align-items: center;
          flex-direction: column;

          figure {
            margin: 0;
            width: 100%;
          }
        }

      `;
    case 'top':
      return`
        display: flex;
        align-items: center;
        flex-direction: column-reverse;

        div {
          width: 60%;
          margin: var(--gutter) auto 0 auto;
          text-align: center;
        }

        figure {
          width: 60%;
        }

        @media ${ _mixin_device.s } {

        }

      `;
    case 'bottom':
      return`
        display: flex;
        align-items: center;
        flex-direction: column;

        div {
          width: 60%;
          margin: 0 auto var(--gutter) auto;
          text-align: center;
        }
        figure {
          width: 60%;
        }

        @media ${ _mixin_device.s } {

        }

      `;
    default:
      return null;
  }
}


// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// END OF FILE #################################################################
