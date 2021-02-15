// BUCKET [ SECTION ] ##########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useCallback } from 'react';
import propTypes from 'prop-types';

// 1.1. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Section  = ({
  children,
  className = '',
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
        <header className="b-section__header">
          { headerTitle && <h2>{ headerTitle }</h2> }
          { headerText && <p>{ headerText }</p> }
        </header>
      );
    };
    return null;
  }, [headerTitle, headerText]);

  // 2.2.1. END

  // 2.2.2. RENDER FOOTER ACTIONS

  const FooterActions = useCallback(() => {
    if (footerActions && footerActions.length > 0) {
      return(
        <ul className="u-list-horizontal u-list-horizontal--center">
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

  // 2.2.3. RENDER FOOTER

  const Footer = useCallback(() => {
    if (footerTitle || footerActions) {
      return(
        <footer className="b-section__footer">
          { footerTitle && <h3>{ footerTitle }</h3> }
          <FooterActions />
        </footer>
      );
    };
    return null;
  }, [footerTitle, footerActions]);


  // 2.2.3. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (

    <section className={ `b-section ${ className }` }
      { ...rest }
    >
      <Header />
      { children }
      <Footer />
    </section>

  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Section.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
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
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Section;

// END OF FILE #################################################################
