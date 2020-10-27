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
  container: styled.article`

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

    height: 100%;

    ${ ({ isInteractive }) => isInteractive && makeInteractiveContainer() }

  `,
  image: styled.figure`
  
    margin: 0;
    flex: none;
    overflow: hidden;
    border-radius: var(--radius-small);
    position: relative;

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
  content: styled.div`
  
    flex: 1;
    padding: var(--gutter);
    margin-top: 15px;

    background: var(--color-white);
    border-radius: var(--radius-small);

    position: relative;

    transition: var(--transition-fast);

    text-align: ${ ({ align }) => align && align };

    ${ _addArrow('top-left', 'var(--color-white)') }

    &:after {
      transform: translateY(10px);
    }

    h3 {
      font-family: var(--card-title-font);
      font-weight: var(--card-title-weight);
      ${ _setFontSize('medium') }

      color: var(--card-title-color);
      margin: 0 0 var(--gutter-small) 0;
      transition: 0.3s;
      font-weight: var(--weight-light);

    }

    p, li, small, strong {
      ${ _setFontSize('small') }
      color: var(--card-content-color)!important;
    }

  `,
  meta: styled.ul`
    ${ _makeList('row') }
    
    margin-bottom: var(--gutter-small)!important;
    padding-bottom: 5px;

    border-bottom: solid 1px var(--card-meta-border-color);
    
    li {
      ${ _setFontSize('small') }
      color: var(--card-meta-color);
      &:not(:first-child) {
        border-left: solid 1px var(--color-light);
        padding-left: 5px;
      }
    }
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
  cta = '',
  isInteractive = false,
  style,
  className,
  tags = [],
  align = 'left',
  meta = [],
  isBordered,
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

  // 3.2.2. TAGS

  const TagContent = useCallback(() => {
    return tags.length > 0 && (
      <Styled.meta>
        { tags.map((i, k) => <li key={ `card-tags-${ k }` }>{ i }</li>) }
      </Styled.meta>
    );
  }, [tags]);

  // 3.2.2. END
  
  // 3.2.2. META CONTENT

  const MetaContent = useCallback(() => {
    return meta.length > 0 && (
      <Styled.meta>
        { meta.map((i, k) => <li key={ `card-meta-${ k }` }>{ i }</li>) }
      </Styled.meta>
    );
  }, [meta]);

  // 3.2.2. END
 
  // 3.2.2. RENDER CTA

  const CTA = useCallback(() => {
    return cta && (
      <footer>
        { cta }
      </footer>
    );
  }, [cta]);

  // 3.2.2. END

  // 3.1. END ..................................................................

  // 3.2. RENDER COMPONENT .....................................................

  return (

    <Styled.container
      style={ style }
      className={ className }
      isInteractive={ isInteractive }
    >
      <Media />
      <Styled.content
        align={ align }
        isBordered={ isBordered }
      >
        { title && <h3>{ title }</h3> }
        <MetaContent />
        { children }
      </Styled.content>

    </Styled.container>

  );

  // 3.2. END ..................................................................

};


// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 4. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Card.propTypes = {
  children: propTypes.node.isRequired,
  image: propTypes.oneOfType([
    propTypes.string,
    propTypes.node,
  ]),
  media: propTypes.node,
  image_alt: propTypes.string,
  cta: propTypes.string,
  tags: propTypes.array,
  media: propTypes.node,
  style: propTypes.object,
  align: propTypes.string,
  children: propTypes.node.isRequired,
  className: propTypes.string,
  image_alt: propTypes.string,
  isInteractive: propTypes.bool,

}

// 4. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Card;

// END OF FILE #################################################################
