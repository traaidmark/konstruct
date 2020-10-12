// CONTAINERS [ SECTION ] ######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useCallback } from 'react';
import propTypes from 'prop-types';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Styled from './stylesheet';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Section  = ({
  children,
  className,
  style,
  noTop,
  noBottom,
  noLeft,
  noRight,
  variantX = 'default',
  variantY = 'default',
  scrollX = false,
  scrollY = false,
  heading,
  description,
  footerHeading,
  footerActions,
}) => {

  // 2.1. FUNCTIONS ............................................................

  // 2.2.1. RENDER HEADER

  const Header = useCallback(() => {
    if (heading || description) {
      return(
        <Styled.header>
          { heading && <h2>{ heading }</h2> }
          { description && <p>{ description }</p> }
        </Styled.header>
      );
    };
    return null;
  }, [heading, description]);

  // 2.2.1. END

  // 2.2.2. RENDER FOOTER

  const Footer = useCallback(() => {
    if (footerHeading || footerActions) {
      return(
        <Styled.footer>
          { footerHeading && <h3>{ footerHeading }</h3> }
          { footerActions && footerActions }
        </Styled.footer>
      );
    };
    return null;
  }, [footerHeading, footerActions]);


  // 2.2.2. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (

    <Styled.container
      style={ style }
      className={ className }
      noTop={ noTop }
      noBottom={ noBottom }
      noLeft={ noLeft }
      noRight={ noRight }
      variantX={ variantX }
      variantY={ variantY }
      scrollX={ scrollX }
      scrollY={ scrollY }
    >
      <Header />
      { children }
      <Footer />
    </Styled.container>

  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Section.propTypes = {
  children: propTypes.node.isRequired,
  style: propTypes.object,
  className: propTypes.string,
  heading: propTypes.oneOfType([
    propTypes.string,
    propTypes.node
  ]),
  description: propTypes.oneOfType([
    propTypes.string,
    propTypes.node
  ]),
  footerHeading: propTypes.oneOfType([
    propTypes.string,
    propTypes.node
  ]),
  footerActions: propTypes.array,
  noTop: propTypes.bool,
  noBottom: propTypes.bool,
  noLeft: propTypes.bool,
  noRight: propTypes.bool,
  variantX: propTypes.oneOf([
    'default',
    'wide',
    'narrow',
  ]),
  variantY: propTypes.oneOf([
    'default',
    'shallow',
    'deep',
  ]),
  scrollX: propTypes.bool,
  scrollY: propTypes.bool,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Section;

// END OF FILE #################################################################
