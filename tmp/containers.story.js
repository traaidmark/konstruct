// STORIES [ CONTAINERS ] ######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import { storiesOf } from '@storybook/react';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Foundation from '../packages/foundation/src';

import { Section } from '../packages/containers/src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. TESTS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

storiesOf('Containers', module)

  // 2.1. FIELDSET .............................................................

  .add(
    'Section', 
    () => {
      
      // 2.1.1. RENDER

      return (
        <Foundation>

          <Section>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar enim risus, sit amet mattis ipsum semper id. Nulla elit sem, ornare tincidunt blandit dictum, tincidunt eu ipsum. Ut sagittis sed neque sollicitudin consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tempus elit mattis tellus convallis malesuada. Nam vel molestie augue, sed eleifend quam. Nunc facilisis hendrerit vestibulum. Nam a placerat erat, eu dictum dolor. In dictum tempus ultrices. Nunc at maximus elit. Fusce lacinia massa quis felis laoreet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis odio eu purus tincidunt iaculis. Aliquam quis neque a diam venenatis venenatis. Aliquam et libero lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <a href="#">Read more</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar enim risus, sit amet mattis ipsum semper id. Nulla elit sem, ornare tincidunt blandit dictum, tincidunt eu ipsum. Ut sagittis sed neque sollicitudin consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tempus elit mattis tellus convallis malesuada. Nam vel molestie augue, sed eleifend quam. Nunc facilisis hendrerit vestibulum. Nam a placerat erat, eu dictum dolor. In dictum tempus ultrices. Nunc at maximus elit. Fusce lacinia massa quis felis laoreet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis odio eu purus tincidunt iaculis. Aliquam quis neque a diam venenatis venenatis. Aliquam et libero lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <a href="#">Read more</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar enim risus, sit amet mattis ipsum semper id. Nulla elit sem, ornare tincidunt blandit dictum, tincidunt eu ipsum. Ut sagittis sed neque sollicitudin consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tempus elit mattis tellus convallis malesuada. Nam vel molestie augue, sed eleifend quam. Nunc facilisis hendrerit vestibulum. Nam a placerat erat, eu dictum dolor. In dictum tempus ultrices. Nunc at maximus elit. Fusce lacinia massa quis felis laoreet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis odio eu purus tincidunt iaculis. Aliquam quis neque a diam venenatis venenatis. Aliquam et libero lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <a href="#">Read more</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar enim risus, sit amet mattis ipsum semper id. Nulla elit sem, ornare tincidunt blandit dictum, tincidunt eu ipsum. Ut sagittis sed neque sollicitudin consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tempus elit mattis tellus convallis malesuada. Nam vel molestie augue, sed eleifend quam. Nunc facilisis hendrerit vestibulum. Nam a placerat erat, eu dictum dolor. In dictum tempus ultrices. Nunc at maximus elit. Fusce lacinia massa quis felis laoreet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis odio eu purus tincidunt iaculis. Aliquam quis neque a diam venenatis venenatis. Aliquam et libero lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <a href="#">Read more</a></p>
          </Section>

        </Foundation>
      )

      // 2.1.1. END
      
    },
  )

  // 2.1. END ..................................................................

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
