// BUCKET [ BLOCK ] ############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useCallback } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  _makeList,
  _setDevice,
  _setFontSize,
} from '@traaidmark/konstruct-mixins';

// 1.1. END ....................................................................

// 1.2. STYLESHEET .............................................................

// 1.2.1. CONTAINER

const Styled = {
  block: styled.aside`

    --block-radius:           var(--radius-small);
    --block-bg-color:         var(--color-white);
    --block-border-color:     var(--color);
    --block-title-color:      var(--color-sub-headings);
    --block-text-color:       var(--color-sub-copy);
  
    border: ${ ({ hasBorder }) => hasBorder ? 'solid 1px var(--block-border-color)' : 'none' };
    border-radius: var(--block-radius);

    background-color: var(--block-bg-color);
    padding: var(--gutter);

  `,
  header: styled.header`
    display: flex;
    justify-content: space-between;

    padding-bottom: var(--gutter-small);
    margin-bottom: var(--gutter);

    border-bottom: solid 1px var(--color-light);

    h4 {
      font-family: var(--family-secondary);
      color: var(--block-title-color);
      margin: 0;
    }

  `,
  actions: styled.nav`
    flex: none;
    margin-left: var(--gutter-small);
    ul {
      ${ _makeList('row') }
      margin: 0;
    }

    @media ${ _setDevice.s } {
      width: 100%;
      margin-left: 0;
    };

  `,
  content: styled.div`
    ${ _setFontSize('small') }
    color: var(--block-text-color);

    max-height: ${ ({ isScrollable }) => isScrollable ? '200px' : 'auto' };
    overflow-y: ${ ({ isScrollable }) => isScrollable ? 'auto' : 'visible' };

    p, li, span, strong, small {
      ${ _setFontSize('small') }
      color: var(--block-text-color);
    }

    li {
      border-bottom: solid 1px var(--color-light);
      padding-bottom: var(--gutter-small);
      margin-bottom: var(--gutter-small);
    }

    @media ${ _setDevice.s } {
      margin-bottom: var(--gutter);
    };
  
  `,
};

// 1.2.1. END

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Block  = ({
  title = undefined,
  children,
  hasBorder = false,
  isScrollable = false,
  actions = [],
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................

  // 2.1.1. ACTIONS

  const Actions = useCallback(() => {
    return actions.length > 0 && (
      <Styled.actions>
        <ul>
          {
            actions.map((i,k) => <li key={ `block-actions-${ k }`}>{ i }</li>)
          }
        </ul>
      </Styled.actions>
    );
  }, [actions]);

  // 2.1.1. END

  // 2.1.2. HEADER

  const Header = useCallback(() => {
    if (title || actions.length > 1) return (
      <Styled.header>
        { title && <h4>{ title }</h4> }
        <Actions />
      </Styled.header>
    );

    return null;
  }, [title, actions]);

  // 2.1.2. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (

    <Styled.block hasBorder={ hasBorder } { ...rest }>
      <Header />
      <Styled.content isScrollable={ isScrollable }>
        { children }
      </Styled.content>
    </Styled.block>

  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Block.propTypes = {
  /** The heading text you want to display */
  title: propTypes.oneOfType([
    propTypes.string,
    propTypes.node,
  ]),
  /** Should the content area scroll when it's longer than 200px */
  isScrollable: propTypes.bool,
  /** You can add a border around the block */
  hasBorder: propTypes.bool,
  /** An array of links / buttons */
  actions: propTypes.array,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Block;

// END OF FILE #################################################################
