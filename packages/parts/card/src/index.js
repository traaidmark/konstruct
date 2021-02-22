// PART [ CARD ] ###############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useCallback } from 'react';
import propTypes from 'prop-types';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import './stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Card  = ({
  children,
  className = '',
  imgSrc,
  videoSrc,
  imgAlt,
  isInteractive,
  isBordered,
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................

  // 2.1.1. RENDER MEDIA

  const Media = useCallback(() => {
    if (videoSrc) {
      return (
        <figure className="p-card__media" dangerouslySetInnerHTML={{ __html: videoSrc }} />
      );
    }
    if (imgSrc) {
      return (
        <figure className="p-card__media">
          <img src={ imgSrc } alt={ imgAlt } />
        </figure>
      );
    }
    return null;
  }, [imgSrc, videoSrc]);

  // 2.1.1. END

  // 2.1.2. MAKE CLASSES

  const interactiveClass = isInteractive ? 'p-card--interactive' : '';
  const borderedClass = isBordered ? 'p-card--bordered' : '';
  const arrowClass = imgSrc ? 'u-arrow u-arrow--top-left' : '';

  // 2.1.2. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (
    <article className={ `p-card ${ className } ${ interactiveClass } ${ borderedClass } `} { ...rest }>
      <Media />
      <div className={ `p-card__body ${ arrowClass }` }>
        { children }
      </div>
    </article>
  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Card.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  /** HTML to display a video, like an iframe or youtube embed code */
  videoSrc: propTypes.node,
  /** URL string to an image */
  imgSrc: propTypes.string,
  /** Alt text to display with image */
  imgAlt: propTypes.string,
  /** Boolean to render an interactive card or not */
  isInteractive: propTypes.bool,
  /** Boolean to render an bordered card or not */
  isBordered: propTypes.bool,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Card;

// END OF FILE #################################################################
