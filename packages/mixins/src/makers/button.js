// MIXINS [ MAKE > BUTTON ] ####################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.1. MAKE BUTTON ............................................................

const makeBtn = (v) => {
  if (v.includes('icon')) {
    return `
      border-radius: 100%;
    
      svg > path {
        fill: var(--btn-${ v }--color);
        transition: var(--transition-fast);
      }
    
      &.active {
        background-color: var(--btn-${ v }--bgA);
        border-color: var(--btn-${ v }--borderA);
    
        svg > path {
          fill: var(--btn-${ v }--colorA);
        }
      }
    
      &:hover {
        svg > path {
          fill: var(--btn-${ v }--colorH);
        }
      }
    `;
  };
  return `
    display: flex;

    width: fit-content;

    color: var(--btn-${ v }--color)!important;

    font-weight: var(--weight-bold);
    font-family: var(--family-secondary);
    
    border-radius: var(--radius-small);

    &:hover {
      color: var(--btn-${ v }--colorH)!important;
    }
  `;
};

// 2.1. END ....................................................................

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. STYLESHEET +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default (
  variant = undefined,
) => {
  if (variant === undefined) {
    throw new Error('_makeButton: Parameters are missing or incomplete.');
  };
  return `

    ${ variant && makeBtn(variant) }

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

  `
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// END OF FILE #################################################################
