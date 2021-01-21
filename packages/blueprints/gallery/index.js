// MEDIA [ GALLERY ] ###########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useCallback, useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  _makeList,
  _setDevice,
} from '@traaidmark/konstruct-mixins';

// 1.1. END ....................................................................

// 1.2. STYLESHEET .............................................................

// 1.2.1. CONTAINER

const Styled = {
  gallery: styled.figure`
    --gallery-thumb-radius:       var(--radius-small);
    --gallery-img-radius:         var(--radius-small);
    --gallery-img-color:          var(--color-white);
    --gallery-thumb-hover-color:  var(--color-accent);
    --gallery-thumb-active-color: var(--color-dark);
    
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin: 0;

    @media ${ _setDevice.s } {
      flex-direction: column;
    };
    @media ${ _setDevice.m } {
      flex-direction: column;
    };
  
  `,
  thumbnails: styled.ul`
    
    flex: none;
    width: 100px;

    overflow-x: hidden;
    overflow-y: auto;


    ${ _makeList('column') }
    align-items: center;
    margin: 0 0 0 var(--gutter-small);

    li {
      margin-bottom: var(--gutter-small);
      
      button {
        background: none;
        width: 80px;
        padding: 0;
        border: none;
        overflow: hidden;
        background: var(--color);
        
        border: solid 2px var(--color-white);
        border-radius: var(--gallery-thumb-radius);
  
        transition: var(--transition-fast);
  
        &:hover {
          cursor: pointer;
          border-color: var(--gallery-thumb-hover-color);
          box-shadow: var(--shadow);
        }
      }
      img {
        border-radius: var(--gallery-thumb-radius);
        display: block;
        width: 100px;
        transition: var(--transition-slow);
        &:hover {
          transform: scale(1.05);
        }
      }
    }

    @media ${ _setDevice.s } {
      width: 100%;
      margin-left: 0!important;
      flex-direction: row!important;
      overflow-x: auto;
      li {
        flex: none;
      }
    };

    @media ${ _setDevice.m } {
      width: 100%;
      margin-left: 0!important;
      flex-direction: row!important;
      overflow-x: auto;
      li {
        flex: none;
      }
    };

  `,
  image: styled.div`
    background-color: var(--gallery-img-color);
    box-shadow: var(--shadow);
    border-radius: var(--gallery-img-radius);
    padding: 5px;
    img {
      display: block;
      border-radius: var(--gallery-img-radius);
    }

    @media ${ _setDevice.s } {
      margin-bottom: var(--gutter-small);
    };
    @media ${ _setDevice.m } {
      margin-bottom: var(--gutter-small);
    };
  
  `,
};

// 1.2.1. END

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Gallery  = ({
  images = [],
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
      <Styled.image>
        <img src={ images[activeIndex] } />
      </Styled.image>
    );

  },[images, activeIndex]);

  // 2.1.2. END

  // 2.1.3. ACTIONS

  const Thumbnails = useCallback(() => {
    return images.length > 0 && (
      <Styled.thumbnails>
        {
          images.map((i,k) => (
            <li key={ `gallery-thumbnails-${ k }` }>
              <button
                type="button"
                onClick={ () => setIndex(k) }
                isActive={ k === activeIndex }
              >
                <img src={ i } alt={ `gallery-thumbnails-${ k }` } />
              </button>
            </li>
          ))
        }
      </Styled.thumbnails>
    );
  }, [images]);

  // 2.1.3. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (

    <Styled.gallery { ...rest }>
      <MainImage />
      <Thumbnails />
    </Styled.gallery>

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
