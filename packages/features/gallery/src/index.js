// FEATURE [ GALLERY ] #########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useCallback, useState } from 'react';
import propTypes from 'prop-types';

// 1.1. END ....................................................................

// 1.2. EXTERNAL DEPENDENCIES ..................................................

import './stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Gallery  = ({
  images = [],
  className = '',
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................

  // 2.1.1. IMAGE STATE

  const [activeIndex, setIndex] = useState(0);

  // 2.1.1. END

  // 2.1.2. 
  // 2.1.2. END

  // 2.1.2. MAIN IMAGE

  const MainImage = useCallback(() => {
    return (
      <div className="f-gallery__image">
        <img src={ images[activeIndex] } alt="" />
      </div>
    );

  },[images, activeIndex]);

  // 2.1.2. END

  // 2.1.3. ACTIONS

  const Thumbnails = useCallback(() => {
    return images.length > 0 && (
      <ul className="f-gallery__thumbnails u-list-vertical">
        {
          images.map((i,k) => (
            <li key={ `gallery-thumbnails-${ k }` }>
              <button
                type="button"
                onClick={ () => setIndex(k) }
                className={ k === activeIndex ? 'f-gallery__thumbnails--active' : '' }
              >
                <img src={ i } alt={ `gallery-thumbnails-${ k }` } alt="" />
              </button>
            </li>
          ))
        }
      </ul>
    );
  }, [images]);

  // 2.1.3. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (

    <figure className={ `f-gallery ${ className }` } { ...rest }>
      <MainImage />
      <Thumbnails />
    </figure>

  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Gallery.propTypes = {
  /** An array of links to images */
  images: propTypes.array,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Gallery;

// END OF FILE #################################################################
