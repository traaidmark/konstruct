// MIXINS [ ADD >ARROW ] #######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. DEFAULTS ...............................................................
// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default (direction, color) => {

  const position = (DIRECTION) => {
    switch(DIRECTION) {
      case 'right':
        return`
          clip-path: polygon(0% 0%, 0% 100%, 100% 0%);
          right: -20px;
          top: 0;
        `;
      case 'bottom':
        return`
          clip-path: polygon(0% 0%, 0% 100%, 100% 0%);
          bottom: -20px;
          left: 0;
        `;
      case 'top':
        return`
          clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
          top: -20px;
          left: 0;
        `;
      case 'top-left':
        return`
          clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
          top: -20px;
          left: 0;
        `;
      case 'top-right':
        return`
          clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
          top: -20px;
          right: 0;
        `;
      case 'bottom-left':
        return`
          clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
          bottom: -20px;
          right: 0;
        `;
      case 'bottom-center':
        return`
          clip-path: polygon(0% 0%, 0% 100%, 50% 100%);
          bottom: -20px;
          right: 50%;
          transform: translateX(-50%);
        `;
      case 'bottom-right':
        return`
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
          bottom: -20px;
          right: 0;
        `;
      default:
        return null;
    }
  }
  const killRadius = (DIRECTION) => {
    switch(DIRECTION) {
      case 'right':
        return`
          border-bottom-right-radius: 0!important;
        `;
      case 'bottom':
        return`
          border-bottom-left-radius: 0!important;
        `;
      case 'top':
        return`
          border-top-left-radius: 0!important;
        `;
      case 'top-left':
        return`
          border-top-left-radius: 0!important;
        `;
      case 'top-right':
        return`
          border-top-right-radius: 0!important;
        `;
      case 'bottom-left':
        return`
          border-bottom-left-radius: 0!important;
        `;
      case 'bottom-right':
        return`
          border-bottom-right-radius: 0!important;
        `;
      default:
        return null;
    }
  }

  return`
    
    position: relative;
    ${ killRadius(direction) }

    &:after {
      content: "";

      width: var(--gutter);
      height: var(--gutter);
      
      position: absolute;
      
      background: ${ color };

      ${ position(direction) }

    }

  `;
  

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// END OF FILE #################################################################
