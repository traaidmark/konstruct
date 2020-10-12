// MIXINS [ SETTERS > FONT SIZE ] ##############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. DEFAULTS ...............................................................
// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default (size) => {

  switch(size) {
    case 'xxlarge':
      return`
        font-size: var(--font-xxlarge-size);
        line-height: var(--font-xxlarge-lineHeight);
      `;
    case 'xlarge':
      return`
        font-size: var(--font-xlarge-size);
        line-height: var(--font-xlarge-lineHeight);
      `;
    case 'large':
      return`
        font-size: var(--font-large-size);
        line-height: var(--font-large-lineHeight);
      `;
    case 'medium':
      return`
        font-size: var(--font-medium-size);
        line-height: var(--font-medium-lineHeight);
      `;
    case 'small':
      return`
        font-size: var(--font-small-size);
        line-height: var(--font-small-lineHeight);
      `;
    default:
      return`
        font-size: var(--font-normal-size);
        line-height: var(--font-normal-lineHeight);
      `;
  }

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// END OF FILE #################################################################
