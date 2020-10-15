// BUCKET [ SECTION ] ##########################################################

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
  noTop,
  noBottom,
  noLeft,
  noRight,
  variantX = 'default',
  variantY = 'default',
  scrollX = false,
  scrollY = false,
  headerTitle,
  headerText,
  footerTitle,
  footerActions,
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................

  // 2.2.1. RENDER HEADER

  const Header = useCallback(() => {
    if (headerTitle || headerText) {
      return(
        <Styled.header>
          { headerTitle && <h2>{ headerTitle }</h2> }
          { headerText && <p>{ headerText }</p> }
        </Styled.header>
      );
    };
    return null;
  }, [headerTitle, headerText]);

  // 2.2.1. END

  // 2.2.2. RENDER FOOTER ACTIONS

  const FooterActions = useCallback(() => {
    if (footerActions && footerActions.length > 0) {
      return(
        <ul>
          {
            footerActions.map((i,k) => {
              return <li key={ `section-footer-action-${ k }` }>{ i }</li>
            })
          }
        </ul>
      );
    };
    return null;
  }, [footerActions]);


  // 2.2.2. END

  // 2.2.2. RENDER FOOTER

  const Footer = useCallback(() => {
    if (footerTitle || footerActions) {
      return(
        <Styled.footer>
          { footerTitle && <h3>{ footerTitle }</h3> }
          <FooterActions />
        </Styled.footer>
      );
    };
    return null;
  }, [footerTitle, footerActions]);


  // 2.2.2. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (

    <Styled.container
      noTop={ noTop }
      noBottom={ noBottom }
      noLeft={ noLeft }
      noRight={ noRight }
      variantX={ variantX }
      variantY={ variantY }
      scrollX={ scrollX }
      scrollY={ scrollY }
      { ...rest }
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
  /** Content of component */
  children: propTypes.node.isRequired,
  /** Header title renders `h2`, you can add html in here too. */
  headerTitle: propTypes.oneOfType([
    propTypes.string,
    propTypes.node
  ]),
  /** Header text renders `p`, you can add html in here too. */
  headerText: propTypes.oneOfType([
    propTypes.string,
    propTypes.node
  ]),
  /** Footer title renders `h4`, you can add html in here too. */
  footerTitle: propTypes.oneOfType([
    propTypes.string,
    propTypes.node
  ]),
  /** An array of html `[<a>Awesome link</a>, <small>text</small>]` */
  footerActions: propTypes.array,
  /** Remove all padding from top */
  noTop: propTypes.bool,
  /** Remove all padding from bottom */
  noBottom: propTypes.bool,
  /** Remove all padding from left */
  noLeft: propTypes.bool,
  /** Remove all padding from right */
  noRight: propTypes.bool,
  /** Variant determining the gutter size on the sides */
  variantX: propTypes.oneOf([
    'default',
    'wide',
    'narrow',
  ]),
  /** Variant determining the gutter size on top and bottom */
  variantY: propTypes.oneOf([
    'default',
    'shallow',
    'deep',
  ]),
  /** If you want the section to be scrollable on X-axis */
  scrollX: propTypes.bool,
  /** If you want the section to be scrollable on Y-axis */
  scrollY: propTypes.bool,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Section;

// END OF FILE #################################################################
