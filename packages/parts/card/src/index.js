// PARTS [ CARD ] ##############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useCallback } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  _makeList,
  _setFontSize,
  _addArrow,
} from '@traaidmark/konstruct-mixins';

// 1.1. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. STYLESHEETS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.1. FUNCTIONS ..............................................................

// 2.1.1. MAKE INTERACTIVE

const makeInteractiveContainer = () => `
  &:hover {
    cursor: pointer;
    &>figure {
      img {
        transform: scale(1.2);
        transition: 3s;
      }
      ul {
        img {
          transform: scale(1);
        }
      }
    }
    &>div {
      box-shadow: var(--shadow);
      transform: scale(1.03);
    }
  }
`;

// 2.1.1. END

// 2.1. END ....................................................................

// 2.2. STYLESHEETS ............................................................

const Styled = {
  card: styled.article`

    --card-text-align:          left;
    --card-border-radius:       var(--radius-small);
    --card-title-font:          var(--family-secondary);
    --card-title-weight:        var(--weight-bold);
    --card-title-color:         var(--color-dark);
    --card-content-color:       var(--color);
    --card-meta-color:          var(--color);
    --card-meta-border-color:   var(--color-light);
    --card-border-color:        var(--color);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    height: 100%;

    ${ ({ isInteractive }) => isInteractive && makeInteractiveContainer() }

  `,
  image: styled.figure`
  
    margin: 0 0 15px 0;
    flex: none;
    overflow: hidden;
    border-radius: var(--radius-small);

    iframe {
      width: 100%!important;
      max-height: 250px;
    }

    img {
      display: block;
      max-width: none;
      width: 100%;
      transition: var(--transition-slow);
    }

    svg {
      max-width: none;
      width: 100%;
      transition: 1s;
    }

  `,
  container: styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
    flex: 1;
    padding: var(--gutter);

    background: var(--color-white);
    border-radius: var(--card-border-radius);

    transition: var(--transition-fast);

    

    ${ 
      ({ hasImage }) => hasImage && _addArrow('top-left', 'var(--color-white)')
    }

    &:after {
      transform: translateY(10px);
    }

    

  `,
  content: styled.div`
    flex: 1;
    margin-bottom: var(--gutter);
    text-align: var(--card-text-align);

    h3 {
      font-family: var(--card-title-font);
      font-weight: var(--card-title-weight);
      ${ _setFontSize('medium') }

      color: var(--card-title-color);
      margin: 0 0 var(--gutter-small) 0!important;
      transition: 0.3s;
      font-weight: var(--weight-light);

    }

    p, li {
      ${ _setFontSize('small') }
      color: var(--card-content-color);
    }
  `,
  meta: styled.ul`

    flex: none;

    ${ _makeList('row') }
    
    margin-bottom: var(--gutter-small)!important;
    padding-top: var(--gutter-small);

    border-top: solid 1px var(--card-meta-border-color);
    
    li {
      ${ _setFontSize('small') }
      color: var(--card-meta-color);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img, svg {
        flex: none;
        margin-right: 5px;
      }
      &:not(:first-child) {
        border-left: solid 1px var(--color-light);
        padding-left: 5px;
      }
    }
  `,
  footer: styled.ul`
    flex: none;
    ${ _makeList('row') }
    justify-content: center;
  `,
};

// 2.2. END ....................................................................

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Card  = ({
  title = undefined,
  children,
  imageSrc = undefined,
  imageAlt = undefined,
  videoSrc = undefined,
  actions = [],
  isInteractive = false,
  meta = [],
  style,
  className,
}) => {


  // 3.1. FUNCTIONS ............................................................

  // 3.2.1. RENDER MEDIA

  const Media = useCallback(() => {
    if (videoSrc) {
      return (
        <Styled.image dangerouslySetInnerHTML={{ __html: videoSrc }} />
      );
    }
    if (imageSrc) {
      return (
        <Styled.image>
          <img src={ imageSrc } alt={ imageAlt } />
        </Styled.image>
      );
    }
    return null;
  }, [imageSrc, videoSrc]);

  // 3.2.1. END
  
  // 3.2.2. META CONTENT

  const MetaContent = useCallback(() => {
    return meta.length > 0 && (
      <Styled.meta>
        { meta.map((i, k) => <li key={ `card-meta-${ k }` }>{ i }</li>) }
      </Styled.meta>
    );
  }, [meta]);

  // 3.2.2. END
 
  // 3.2.3. RENDER ACTIONS

  const Actions = useCallback(() => {
    return actions.length > 0 && (
      <Styled.footer>
        { 
          actions.map((i,k) => (
            <li key={ `card-actions-${ k }` }>{ i }</li>
          ))
        }
      </Styled.footer>
    );
  }, [actions]);

  // 3.2.3. END

  // 3.1. END ..................................................................

  // 3.2. RENDER COMPONENT .....................................................

  return (

    <Styled.card
      style={ style }
      className={ className }
      isInteractive={ isInteractive }
    >
      <Media />
      <Styled.container hasImage={ imageSrc ? true : false }>
        <Styled.content>
          { title && <h3>{ title }</h3> }
          { children }
        </Styled.content>
        <MetaContent />
        <Actions />
      </Styled.container>
      
    </Styled.card>

  );

  // 3.2. END ..................................................................

};


// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 4. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Card.propTypes = {
  /** Title of the card */
  title: propTypes.string,
  /** Content of the card */
  children: propTypes.node,
  /** Url or html to display an image */
  imageSrc: propTypes.oneOfType([
    propTypes.string,
    propTypes.node,
  ]),
  /** Alt text to display with image */
  imageAlt: propTypes.string,
  /** Url or html to display a video */
  videoSrc: propTypes.oneOfType([
    propTypes.string,
    propTypes.node,
  ]),
  /** An array of links to display below the content */
  actions: propTypes.array,
  /** Whether or not to have hover effects */
  isInteractive: propTypes.bool,
  /** An array of items to display as meta content */
  meta: propTypes.array,

}

// 4. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Card;

// END OF FILE #################################################################
