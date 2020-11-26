// BUCKET [ TOOLBAR ] ##########################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useCallback } from 'react';
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
  header: styled.header`
    --toolbar-border-color:     var(--color-light);
    --toolbar-heading-color:    var(--color-headings);
    --toolbar-text-color:       var(--color-sub-copy);
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border-bottom: solid 1px var(--toolbar-border-color);
    padding-bottom: var(--gutter);

    @media ${ _setDevice.s } {
      flex-direction: column;
    };
  
  `,
  actions: styled.nav`
    flex: none;
    margin-left: var(--gutter-medium);
    ul {
      ${ _makeList('row') }
      margin: 0;
    }

    @media ${ _setDevice.s } {
      width: 100%;
      margin-left: 0;
    };

    @media ${ _setDevice.s } {
      margin-left: var(--gutter-small);
    };

  `,
  content: styled.div`
    h1,h2,h3,h4,h5,h6 {
      margin-bottom: var(--gutter-small);
      color: var(--toolbar-heading-color);
    }

    p {
      color: var(--toolbar-text-color);
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

const Toolbar  = ({
  heading = undefined,
  headingAs = (props) => <h1 { ...props } />,
  text = undefined,
  actions = [],
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................

  // 2.1.1. WRAP HEADING

  const Heading = useCallback((props) => {
      return headingAs(props)
  }, [headingAs]);

  // 2.1.1. END

  // 2.1.2. CONTENT

  const Content = useCallback(() => {
    return (
      <Styled.content>
        { heading && <Heading>{ heading }</Heading> }
        { text && <p>{ text }</p> }
      </Styled.content>
    );

  },[heading]);

  // 2.1.2. END

  // 2.1.3. ACTIONS

  const Actions = useCallback(() => {
    return actions.length > 0 && (
      <Styled.actions>
        <ul>
          {
              actions.map((i,k) => <li key={ `toolbar-actions-${ k }`}>{ i }</li>)
          }
        </ul>
      </Styled.actions>
    );
  }, [actions]);

  // 2.1.3. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (

    <Styled.header { ...rest }>
      <Content />
      <Actions />
    </Styled.header>

  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Toolbar.propTypes = {
  /** The heading text you want to display */
  heading: propTypes.oneOfType([
    propTypes.string,
    propTypes.node,
  ]),
  /** You can override the default h1 with whatever you want */
  headingAs: propTypes.func,
  /** Sub text you want to display below the title */
  text: propTypes.oneOfType([
    propTypes.string,
    propTypes.node,
  ]),
  /** An array of links / buttons */
  actions: propTypes.array,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Toolbar;

// END OF FILE #################################################################
