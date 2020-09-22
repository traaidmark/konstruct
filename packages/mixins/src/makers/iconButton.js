// MIXINS [ MAKE > BUTTON ] ####################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const makeSize = (SIZE) => {
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
  }
}

export default (theme, size) => `

  display: flex;
  justify-content: center;
  align-items: center;

  ${ makeSize(size) }

  background-color: var(--btn-${ theme }--bg);

  border: solid 2px var(--btn-${ theme }--border);
  border-radius: 100%;

  box-shadow: none;
  transform: translateY(0) scale(1);

  transition: var(--transition-fast);

  svg > path {
    fill: var(--btn-${ theme }--color);
    transition: var(--transition-fast);
  }

  &.active {
    background-color: var(--btn-${ theme }--bgA);
    border-color: var(--btn-${ theme }--borderA);

    svg > path {
      fill: var(--btn-${ theme }--colorA);
    }
  }

  &:hover {

    cursor: pointer;

    background-color: var(--btn-${ theme }--bgH);
    border-color: var(--btn-${ theme }--borderH);

    box-shadow: 1px 1px 10px rgba(0,0,0, 0.3);
    transform: translateY(-2px) scale(1.02);

    svg > path {
      fill: var(--btn-${ theme }--colorH);
    }
  }

  &:disabled {
    opacity: 0.5;
    &:hover {
      cursor: not-allowed!important;

      background-color: var(--btn-${ theme }--bg)!important;
      border-color: var(--btn-${ theme }--border)!important;

      box-shadow: none;
      transform: translateY(0px) scale(1);

      svg > path {
        fill: var(--btn-${ theme }--color)!important;
      }
    }
  }

`;

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
