// STORIES [ FOUNDATION ] ######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import { storiesOf } from '@storybook/react';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Foundation from '../packages/foundation/src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. TESTS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

storiesOf('Foundation', module)

  // 2.1. FIELDSET .............................................................

  .add(
    'Content', 
    () => {
      
      // 2.1.1. RENDER

      return (
        <Foundation>

          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar enim risus, sit amet mattis ipsum semper id. Nulla elit sem, ornare tincidunt blandit dictum, tincidunt eu ipsum. Ut sagittis sed neque sollicitudin consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tempus elit mattis tellus convallis malesuada. Nam vel molestie augue, sed eleifend quam. Nunc facilisis hendrerit vestibulum. Nam a placerat erat, eu dictum dolor. In dictum tempus ultrices. Nunc at maximus elit. Fusce lacinia massa quis felis laoreet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis odio eu purus tincidunt iaculis. Aliquam quis neque a diam venenatis venenatis. Aliquam et libero lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <a href="#">Read more</a></p>

          <p>Sed tristique malesuada arcu dignissim molestie. Maecenas interdum accumsan risus. In finibus lorem massa, eu accumsan tortor imperdiet nec. Proin dictum malesuada elit, varius euismod urna aliquet nec. Ut ornare libero nisl, in imperdiet arcu molestie non. Curabitur vel orci placerat, molestie nisl eget, lacinia felis. Sed malesuada, diam sit amet convallis semper, mi neque ullamcorper enim, a porttitor velit dui eget leo. Ut laoreet nibh vitae bibendum tristique. Vestibulum non tempus purus, nec scelerisque magna. Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>

          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>

          <p>Ut eu erat est. Maecenas scelerisque tincidunt facilisis. Morbi non ullamcorper eros. Donec a ligula nulla. Duis interdum tortor at turpis luctus elementum. Maecenas tincidunt non felis et laoreet. Cras ac sodales quam. Suspendisse ultrices id orci vitae venenatis. Integer at dictum ligula, ac laoreet metus. Sed convallis scelerisque nibh, viverra pretium dui laoreet in. In maximus ut nunc at vehicula. Donec suscipit ex vel arcu mattis consectetur. Mauris a risus faucibus, lacinia enim at, cursus augue. Sed sit amet consectetur tellus. Fusce nisi massa, elementum nec ante nec, rhoncus fermentum odio. Proin eu hendrerit purus.</p>

          <ul>
            <li>Morbi in arcu metus.</li> 
            <li>Morbi in arcu metus.</li> 
            <li>Morbi in arcu metus.</li> 
            <li>Morbi in arcu metus.</li> 
            <li>Morbi in arcu metus.</li> 
          </ul>

          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>

          <p>Morbi in arcu metus. Phasellus placerat, diam ut tristique scelerisque, nisl lectus consequat magna, sit amet commodo leo quam non turpis. Integer sagittis lorem id tristique porta. Cras id dolor auctor, aliquet lectus a, gravida augue. Nunc sit amet cursus ante. Nunc magna arcu, rhoncus vehicula enim eget, lacinia viverra ante. Nulla quis fringilla sem. Aenean sagittis quis magna sit amet iaculis. Nunc fringilla turpis eu consectetur scelerisque. Cras nec arcu mi. Praesent pellentesque sit amet ex ut iaculis. Aenean aliquet sollicitudin mi, vitae dictum ipsum fermentum in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar diam quis ultricies hendrerit.</p>

          <ol>
            <li>Nulla vel urna vitae augue semper vulputate eu ac enim. Nunc non lobortis quam. Vivamus ultrices urna sit amet tellus eleifend, lobortis ullamcorper quam fermentum. Fusce ullamcorper odio id ultricies gravida. Donec eu bibendum ipsum. Nam rutrum quis ante id pretium. Etiam ex leo, dictum at justo a, egestas posuere eros. </li> 
            <li>Morbi in arcu metus.</li> 
            <li>Morbi in arcu metus.</li> 
            <li>Morbi in arcu metus.</li> 
            <li>Morbi in arcu metus.</li> 
          </ol>

          <h4>H4 Title</h4>

          <p>Nulla vel urna vitae augue semper vulputate eu ac enim. Nunc non lobortis quam. Vivamus ultrices urna sit amet tellus eleifend, lobortis ullamcorper quam fermentum. Fusce ullamcorper odio id ultricies gravida. Donec eu bibendum ipsum. Nam rutrum quis ante id pretium. Etiam ex leo, dictum at justo a, egestas posuere eros. Pellentesque vulputate vitae orci sit amet scelerisque. Suspendisse potenti. Nam eleifend quam malesuada, lacinia nulla eu, mattis massa. Suspendisse convallis vestibulum pulvinar. Maecenas id odio turpis. Aenean at arcu eget dui pharetra maximus. Etiam maximus gravida magna, at egestas nisl blandit non. </p>

          <h5>H5 Title</h5>

          <span>This is a span!</span>

          <p>Nulla vel urna vitae augue semper vulputate eu ac enim. Nunc non lobortis quam. Vivamus ultrices urna sit amet tellus eleifend, lobortis ullamcorper quam fermentum.</p>

          <h6>H6 Title</h6>
          <small>This is small text</small>

        </Foundation>
      )

      // 2.1.1. END
      
    },
  )

  // 2.1. END ..................................................................

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
