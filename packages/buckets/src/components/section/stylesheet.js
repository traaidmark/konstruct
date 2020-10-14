// BUCKET [ SECTION > STYLESHEET ] #############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import styled from 'styled-components';
import {
  _setDevice,
  _setFontSize,
} from '@traaidmark/konstruct-mixins';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.1. MAKE VARIANT X .........................................................

const makeVariantX = (variantX) => {
  switch (variantX) {
    case 'narrow':
      return `
        padding-left: 20%;
        padding-right: 20%;
        @media ${ _setDevice.m } {
          padding-left:  15%;
          padding-right: 15%;
        }
        @media ${ _setDevice.xl } {
          padding-left:  30%;
          padding-right: 30%;
        }
      `
    case 'wide':
      return `
        padding-left: var(--gutter-medium);
        padding-right: var(--gutter-medium);
      `
    default:
      return `
        @media ${ _setDevice.m } {
          padding-left: var(--gutter-medium);
          padding-right: var(--gutter-medium);
        };
        @media ${ _setDevice.l } {
          padding-left:  10%;
          padding-right: 10%;
        };
        @media ${ _setDevice.xl } {
          padding-left:  15%;
          padding-right: 15%;
        };
      `
  }
}

// 2.1. END ....................................................................

// 2.2. MAKE VARIANT Y .........................................................

const makeVariantY = (variantY) => {
  switch (variantY) {
    case 'deep':
      return `
        padding-top: var(--gutter-large);
        padding-bottom: var(--gutter-large);
      `
    case 'shallow':
      return `
        padding-top: var(--gutter);
        padding-bottom: var(--gutter);
      `
    default:
      return `
        padding-top: var(--gutter-medium);
        padding-bottom: var(--gutter-medium);
        @media ${ _setDevice.s } {
          padding-top: var(--gutter);
          padding-bottom: var(--gutter);
        };
      `
  }
}

// 2.2. END ....................................................................

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STYLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {

  // 3.1. MAIN CONTAINER .......................................................

  container: styled.section`

  ${ ({ angle }) => angle && _mixin_add_angle(angle) };

  ${ ({ scrollX }) => scrollX && `overflow-x: scroll` };
  ${ ({ scrollY }) => scrollY && `overflow-y: scroll` };

  ${ ({ variantX }) => variantX && makeVariantX(variantX) };
  ${ ({ variantY }) => variantY && makeVariantY(variantY) };

  ${ ({ noTop }) => noTop && `padding-top: 0!important` };
  ${ ({ noBottom }) => noBottom && `padding-bottom: 0!important` };
  ${ ({ noLeft }) => noLeft && `padding-left: 0!important` };
  ${ ({ noRight }) => noRight && `padding-right: 0!important` };

  ${ ({ background }) => background && _mixin_add_paint(background) };

  @media ${ _setDevice.s } {
    padding: var(--gutter);
  };

  `,

  // 3.1. END ..................................................................

  // 3.3. SECTION HEADER .......................................................

  header: styled.header`

  margin-bottom: var(--gutter-medium);
  margin-right: auto;
  margin-left: auto;

  width: 50%;

  text-align: center!important;

  h2 {
    margin: 0 0 var(--gutter-small) 0;
  }

  p {
    ${ _setFontSize('medium') }
  }

  @media ${ _setDevice.s } {
    margin-bottom: var(--gutter);
    width: 100%;
  };

  @media ${ _setDevice.m } {
    margin-bottom: var(--gutter);
    width: 80%;
  };

  @media ${ _setDevice.l } {
    margin-bottom: var(--gutter);
    width: 60%;
  };

  `,

  // 3.3. END ..................................................................

  // 3.4. SECTION FOOTER .......................................................

  footer: styled.footer`

  display: flex!important;
  flex-direction: column;
  align-items: center;

  margin-top: var(--gutter-medium)!important;

  `,

  // 3.4. END ..................................................................

};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
