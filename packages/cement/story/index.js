// PARTS - DATA ################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import '../src/core.css';

import '../src/part-button.css';
import '../src/part-flag.css';
import '../src/part-data.css';
import '../src/part-sticker.css';

import '../src/bucket-section.css';
import '../src/bucket-grid.css';
import '../src/bucket-block.css';

import '../src/utility-list.css';


import Section from '../../buckets/section/src';
import Grid from '../../buckets/grid/src';

import List from '../../../storybook-components/List';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: '01 Cement/Core',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. DEMO ...................................................................

export const Core = (args) => (
  <>
    <Section headerTitle="Text">
      <h1>This is an H1 heading</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed rutrum dui. Vivamus dolor lectus, congue sit amet posuere at, tincidunt in arcu. Curabitur magna nibh, ultrices vitae dapibus quis, sodales sed leo. Nam molestie risus urna, in pharetra magna venenatis ut. Vivamus interdum semper cursus. Aliquam velit lorem, tincidunt nec molestie eu, cursus eu purus. Suspendisse pellentesque augue in risus gravida, blandit lobortis urna tempor. Nullam diam lacus, tempor a sodales ac, porta ut ligula. Nulla arcu justo, dapibus et vulputate ut, pulvinar et purus. Nullam id mauris non velit luctus commodo vel ac tortor. Aliquam mollis euismod turpis nec gravida. Cras facilisis justo justo, vel pulvinar diam scelerisque non. Donec viverra gravida erat. Vivamus ipsum est, semper id ipsum id, <a href="">cursus posuere sem.</a></p>
      <h2>This is a h2 heading</h2>
      <p> Sed eu nibh nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id ante viverra nibh tincidunt aliquet et non mauris. Nunc sed orci a turpis laoreet porttitor vitae imperdiet metus. Mauris et mauris dapibus, hendrerit felis at, pretium sem. Morbi interdum turpis et libero convallis, nec scelerisque dolor tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nibh enim, semper eu tellus sed, consectetur ultricies velit. Etiam scelerisque lectus augue. Nunc sollicitudin sollicitudin nulla vel accumsan. Quisque ornare, ante eget pellentesque vestibulum, orci orci vehicula erat, vel suscipit urna ipsum vel velit. Vivamus ultricies diam non eros facilisis pharetra. Nulla porta dolor at metus pretium tincidunt. Etiam mollis nisl scelerisque urna lacinia dignissim. Duis dolor mi, aliquet ut porttitor sed, faucibus et felis. Praesent pharetra molestie elit, et feugiat quam consequat quis.</p>

      <p>In ut tristique mauris. Maecenas nec sodales tortor, eu interdum mi. Maecenas enim tortor, ultricies nec iaculis a, egestas a felis. Duis imperdiet viverra lorem nec maximus. Aliquam lorem ligula, ultrices interdum urna non, scelerisque porttitor ex. Maecenas cursus nulla at nibh pulvinar, ut iaculis felis dignissim. Vivamus sed tempor lacus, sit amet cursus nulla. Curabitur eleifend elit velit, a sagittis quam convallis ut. Nulla blandit consequat est, quis accumsan est pretium vel. Vivamus vel convallis turpis, vitae rutrum est. Suspendisse sodales egestas viverra. Donec mollis tempor viverra. </p>
      <h3>This an h3 heading.</h3>
      <p>Nullam nec nunc et tellus accumsan sollicitudin. Donec turpis tellus, efficitur et turpis efficitur, tincidunt maximus nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras pharetra nisl sit amet maximus dignissim. Fusce dapibus interdum purus, ac suscipit purus auctor et. Praesent gravida tortor a posuere fermentum. Nam ut ante nec purus egestas congue quis non metus. Morbi viverra vehicula est, et rutrum risus tincidunt sed. Vestibulum non nunc eleifend, aliquet leo a, pharetra est. Proin vulputate volutpat venenatis. Vestibulum orci felis, venenatis nec elementum in, tristique ac mauris. </p>

      <h4>This is a h4 heading</h4>

      <ul>
        <li>Cras pharetra nisl sit amet maximus dignissim. Fusce dapibus interdum purus</li>
        <li>Cras pharetra nisl sit amet maximus dignissim. Fusce dapibus interdum purus</li>
        <li>Cras pharetra nisl sit amet maximus dignissim. Fusce dapibus interdum purus</li>
        <li>Cras pharetra nisl sit amet maximus dignissim. Fusce dapibus interdum purus</li>
        <li>Cras pharetra nisl sit amet maximus dignissim. Fusce dapibus interdum purus</li>
      </ul>
    </Section>
    <Section noLeft noRight headerTitle="Forms">

    <Section>
      <h2>Input Field</h2>
      <Grid>
        <aside>
          <h4><code>input type="text"</code></h4>
          <input type="text" name="name" placeholder="First name" />
        </aside>
        <aside>
          <h4><code>input type="text" disabled</code></h4>
          <input type="text" name="name" placeholder="First name" disabled />
        </aside>
        <aside>
          <h4><code>input type="text" class="hasError"</code></h4>
          <input type="text" name="name" placeholder="First name" className="hasError" />
        </aside>
      </Grid>
    </Section>
    <Section>
      <h3>Other input types</h3>
      <Grid>
        <aside>
          <h4><code>input type="email"</code></h4>
          <input type="email" name="email" placeholder="yourname@provider.com" />
        </aside>
        <aside>
          <h4><code>input type="password"</code></h4>
          <input type="password" name="password" placeholder="yourSecurePassword" />
        </aside>
        <aside>
          <h4><code>input type="number"</code></h4>
          <input type="number" name="number" />
        </aside>
        <aside>
          <h4><code>input type="tel"</code></h4>
          <input type="tel" name="tel" />
        </aside>
        <aside>
          <h4><code>input type="url"</code></h4>
          <input type="url" name="url" />
        </aside>
        <aside>
          <h4><code>input type="file"</code></h4>
          <input type="file" name="file" />
        </aside>
        <aside>
          <h4><code>input type="image"</code></h4>
          <input type="image" name="image" />
        </aside>
        <aside>
          <h4><code>input type="date"</code></h4>
          <input type="date" name="date" />
        </aside>
        <aside>
          <h4><code>input type="time"</code></h4>
          <input type="time" name="time" />
        </aside>
        <aside>
          <h4><code>input type="month"</code></h4>
          <input type="month" name="month" />
        </aside>
        <aside>
          <h4><code>input type="week"</code></h4>
          <input type="week" name="week" />
        </aside>
        <aside>
          <h4><code>input type="datetime-local"</code></h4>
          <input type="datetime-local" name="datetime-local" />
        </aside>
        <aside>
          <h4><code>input type="color"</code></h4>
          <input type="color" name="color" />
        </aside>
        <aside>
          <h4><code>input type="range"</code></h4>
          <input type="range" name="range" min="0" max="10" />
        </aside>
        <aside>
          <h4><code>input type="search"</code></h4>
          <input type="search" name="search" />
        </aside>
      </Grid>
    </Section>
    <Section>
      <h3>Radio Element</h3>
      
      <Grid>
        <aside>
          <h4><code>input type="radio"</code></h4>
          <ul>
            <li><label><input type="radio" name="radio1" value="yes" /> Yes</label></li>
            <li><label><input type="radio" name="radio1" value="no" /> No</label></li>
          </ul>
        </aside>
        <aside>
          <h4><code>input type="radio" disabled</code></h4>
          <ul>
            <li><label><input type="radio" name="radio2" value="yes" checked disabled /> Yes</label></li>
            <li><label><input type="radio" name="radio2" value="no" disabled /> No</label></li>
          </ul>
        </aside>
        <aside>
          <h4><code>input type="radio" class="hasError"</code></h4>
          <ul>
            <li><label><input type="radio" name="radio3" value="yes" className="hasError" /> Yes</label></li>
            <li><label><input type="radio" name="radio3" value="no" className="hasError" /> No</label></li>
          </ul>
        </aside>
        
      </Grid>
    </Section>
    <Section>
      <h3>Checkbox Element</h3>
      
      <Grid>
        <aside>
          <h4><code>input type="checkbox"</code></h4>
          <ul>
            <li><label><input type="checkbox" name="checkbox1" /> I want the extra warranty</label></li>
            <li><label><input type="checkbox" name="checkbox2" /> I want to receive the newsletter</label></li>
          </ul>
        </aside>
        <aside>
          <h4><code>input type="checkbox" disabled</code></h4>
          <ul>
            <li><label><input type="checkbox" name="checkbox3" checked disabled /> I want the extra warranty</label></li>
            <li><label><input type="checkbox" name="checkbox4" disabled /> I want to receive the newsletter</label></li>
          </ul>
        </aside>
        <aside>
          <h4><code>input type="checkbox" class="hasError"</code></h4>
          <ul>
            <li><label><input type="checkbox" name="checkbox5" className="hasError" /> I want the extra warranty</label></li>
            <li><label><input type="checkbox" name="checkbox3" className="hasError" /> I want to receive the newsletter</label></li>
          </ul>
        </aside>
        
      </Grid>
    </Section>
    <Section>
      <h3>Textarea</h3>
      <h4><code>textarea</code></h4>
      <textarea></textarea>
    </Section>
    <Section>
      <h3>Select</h3>
      <Grid>
        <aside>
          <h4><code>select</code></h4>
          <select name="select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
            <option>Option 6</option>
            <option>Option 7</option>
            <option>Option 8</option>
          </select>
        </aside>
        <aside>
          <h4><code>select disabled</code></h4>
          <select name="select" disabled>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
            <option>Option 6</option>
            <option>Option 7</option>
            <option>Option 8</option>
          </select>
        </aside>
        <aside>
          <h4><code>select class="hasError"</code></h4>
          <select name="select" className="hasError">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
            <option>Option 6</option>
            <option>Option 7</option>
            <option>Option 8</option>
          </select>
        </aside>
      </Grid>
    </Section>

  </Section>
  </>
);

// 3.1. END ....................................................................

// 3.2. PARTS ..................................................................

export const Parts = (args) => (
  <>
    <Section noLeft noRight noTop>
      <h2>Buttons</h2>
      <List>
        <li>
          <a href="#" className="p-button">Primary Button</a>
        </li>
        <li>
          <a href="#" className="p-button p-button--danger">Dangerous Action</a>
        </li>
        <li>
          <a href="#" className="p-button p-button--warning">Careful Action</a>
        </li>
        <li>
          <a href="#" className="p-button p-button--safe">Safe Action</a>
        </li>
      </List>
      <h4>Code</h4>
      <Source
        code={dedent`
        <a href="#" className="p-button">Button</a>
        <a href="#" className="p-button p-button--danger">Button</a>
        <a href="#" className="p-button p-button--warning">Button</a>
        <a href="#" className="p-button p-button--safe">Button</a>
        `}
      />
    </Section>
    <Section noLeft noRight noTop>
      <h3>Button Sizes</h3>
      <List>
        <li>
          <a href="#" className="p-button p-button--small">Small Button</a>
        </li>
        <li>
          <a href="#" className="p-button p-button--primary">Default Button</a>
        </li>
        <li>
          <a href="#" className="p-button p-button--large">Large Button</a>
        </li>
      </List>
      
      <h4>Code</h4>
      <Source
        code={dedent`
        <a href="#" className="p-button p-button--small">Button</a>
        <a href="#" className="p-button p-button--large">Button</a>
        `}
      />
    </Section>
    <Section noLeft noRight noTop>
      <h3>Full width button</h3>
      <a href="#" className="p-button p-button--full">Full width Button</a>
      <br />
      
      <h4>Code</h4>
      <Source
        code={dedent`
        <a href="#" className="p-button p-button--full">Button</a>
        `}
      />
    </Section>
    <Section noLeft noRight noTop headerText="Flags">
      <List>
        <li>
          <span className="p-flag">flag</span>
        </li>
        <li>
          <span className="p-flag p-flag--info">info</span>
        </li>
        <li>
          <span className="p-flag p-flag--new">new</span>
        </li>
        <li>
          <span className="p-flag p-flag--aware">aware</span>
        </li>
        <li>
          <span className="p-flag p-flag--important">important</span>
        </li>
      </List>
      <h4>Code</h4>
      <Source
        code={dedent`
        <span className="p-flag">flag</span>
        <span className="p-flag p-flag--info">info</span>
        <span className="p-flag p-flag--new">new</span>
        <span className="p-flag p-flag--aware">aware</span>
        <span className="p-flag p-flag--important">important</span>
        `}
      />
    </Section>
    <Section noLeft noRight noTop>
      <List>
        <li>
          <div className="p-data">
            <i>USD</i>
            <strong>300.00</strong>
          </div>
        </li>
      </List>
      <h4>Code</h4>
      <Source
        code={dedent`
        <div className="p-data">
          <i>USD</i>
          <strong>300.00</strong>
        </div>
        `}
      />
    </Section>
    <Section noLeft noRight noTop headerText="Data">
      <h3>Size Variations</h3>
      <Grid>
        <aside>
          <h5><code>part-data--small</code></h5>
          <div className="p-data p-data--small">
            <i>USD</i>
            <strong>300.00</strong>
          </div>
          <Source
            code={dedent`
            <div className="p-data p-data--small">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
            `}
          />
        </aside>
        <aside>
          <h5><code>part-data--large</code></h5>
          <div className="p-data p-data--large">
            <i>USD</i>
            <strong>300.00</strong>
          </div>
          <Source
            code={dedent`
            <div className="p-data p-data--large">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
            `}
          />
        </aside>
        <aside>
          <h5><code>part-data--xlarge</code></h5>
          <div className="p-data p-data--xlarge">
            <i>USD</i>
            <strong>300.00</strong>
          </div>
          <Source
            code={dedent`
            <div className="p-data p-data--xlarge">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
            `}
          />
        </aside>
      </Grid>
    </Section>

    <Section noLeft noRight noTop headerText="Sticker">
      <List>
        <li>
          <div className="p-sticker">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
        </li>
      </List>
      <h4>Code</h4>
      <Source
        code={dedent`
        <div className="p-sticker">
          <small>Sticker Label</small>
          <div className="p-data">
            <i>USD</i>
            <strong>300.00</strong>
          </div>
        </div>
        `}
      />
    </Section>
    <Section noLeft noRight noTop>
      <h3>Vertical Orientation</h3>
      <Grid>
        <aside>
          <h5><code>part-sticker--top</code></h5>
          <div className="p-sticker p-sticker--top">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
          <Source
            code={dedent`
            <div className="p-sticker p-sticker--top">
              <small>Sticker Label</small>
              <div className="p-data">
                <i>USD</i>
                <strong>300.00</strong>
              </div>
            </div>
            `}
          />
        </aside>
        <aside>
          <h5><code>part-sticker--bottom</code></h5>
          <div className="p-sticker p-sticker--bottom">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
          <Source
            code={dedent`
            <div className="p-sticker p-data--bottom">
              <small>Sticker Label</small>
              <div className="p-data">
                <i>USD</i>
                <strong>300.00</strong>
              </div>
            </div>
            `}
          />
        </aside>
      </Grid>
    </Section>
    <Section noLeft noRight noTop>
      <h3>Horizontal Orientation</h3>
      <Grid>
        <aside>
          <h5><code>part-sticker--left</code></h5>
          <div className="p-sticker p-sticker--left">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
          <Source
            code={dedent`
            <div className="p-sticker p-sticker--left">
              <small>Sticker Label</small>
              <div className="p-data">
                <i>USD</i>
                <strong>300.00</strong>
              </div>
            </div>
            `}
          />
        </aside>
        <aside>
          <h5><code>part-sticker--center</code></h5>
          <div className="p-sticker p-sticker--center">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
          <Source
            code={dedent`
            <div className="p-sticker p-data--center">
              <small>Sticker Label</small>
              <div className="p-data">
                <i>USD</i>
                <strong>300.00</strong>
              </div>
            </div>
            `}
          />
        </aside>
        <aside>
          <h5><code>part-sticker--right</code></h5>
          <div className="p-sticker p-sticker--right">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
          <Source
            code={dedent`
            <div className="p-sticker p-data--right">
              <small>Sticker Label</small>
              <div className="p-data">
                <i>USD</i>
                <strong>300.00</strong>
              </div>
            </div>
            `}
          />
        </aside>
      </Grid>
    </Section>

  </>
);


// 3.2. END ....................................................................

// 3.3. BUCKETS ................................................................

export const Buckets = (args) => (
  <>
    <Section  noLeft noRight noTop headerTitle="Section">
      <section className="b-section">
        <header className="b-section__header">
          <h2>Default Section</h2>
          <p>Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>
        </header>
        <p>Sed tristique malesuada arcu dignissim molestie. Maecenas interdum accumsan risus. In finibus lorem massa, eu accumsan tortor imperdiet nec. Proin dictum malesuada elit, varius euismod urna aliquet nec. Ut ornare libero nisl, in imperdiet arcu molestie non. Curabitur vel orci placerat, molestie nisl eget, lacinia felis. Sed malesuada, diam sit amet convallis semper, mi neque ullamcorper enim, a porttitor velit dui eget leo. Ut laoreet nibh vitae bibendum tristique. Vestibulum non tempus purus, nec scelerisque magna. Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>
        <footer className="b-section__footer">
          <h3>This is a call to action header</h3>
          <ul class="u-list-horizontal u-list-horizontal--center">
            <li><a href="">Action Link</a></li>
            <li><a href="">Action Link</a></li>
          </ul>
        </footer>
      </section>

      <h4>Code</h4>
      <Source
        code={dedent`
        <section className="b-section">
          <header className="b-section__header">
            <h2>Default Section</h2>
            <p>Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>
          </header>
          <p>Sed tristique malesuada arcu dignissim molestie. Maecenas interdum accumsan risus. In finibus lorem massa, eu accumsan tortor imperdiet nec. Proin dictum malesuada elit, varius euismod urna aliquet nec. Ut ornare libero nisl, in imperdiet arcu molestie non. Curabitur vel orci placerat, molestie nisl eget, lacinia felis. Sed malesuada, diam sit amet convallis semper, mi neque ullamcorper enim, a porttitor velit dui eget leo. Ut laoreet nibh vitae bibendum tristique. Vestibulum non tempus purus, nec scelerisque magna. Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien. Duis a augue pharetra ex consequat ultrices. Vivamus odio ligula, consequat non turpis ac, pretium posuere est.</p>
          <footer className="b-section__footer">
            <h3>This is a call to action header</h3>
            <ul class="u-list-horizontal u-list-horizontal--center">
              <li><a href="">Action Link</a></li>
              <li><a href="">Action Link</a></li>
            </ul>
          </footer>
        </section>
        `}
      />
    </Section>
  </>
);

// 3.3. END ....................................................................

// 3.4. UTILITIES ..............................................................

export const Utilities = (args) => (
  <>
    <Section noLeft noRight noTop headerText="Lists">
      <h3>Vertical List</h3>
      <ul class="u-list-vertical">
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
      </ul>
      <h4>Code</h4>
      <Source
        code={dedent`
        <ul class="u-list-vertical">
        ...
        </ul>
        `}
      />
    </Section>
    <Section noLeft noRight noTop>
      <h3>Horizontal List</h3>
      <ul class="u-list-horizontal">
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
        <li>
          <a href="#">Link in a list</a>
        </li>
      </ul>
      <h4>Code</h4>
      <Source
        code={dedent`
        <ul class="u-list-horizontal">
        ...
        </ul>
        `}
      />
    </Section>
    <Section noLeft noRight noTop>
      <Grid>
        <aside>
          <h3>Horizontal List - Divided</h3>
          <ul class="u-list-horizontal u-list--divided">
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
          </ul>
          <h4>Code</h4>
          <Source
            code={dedent`
            <ul class="u-list-horizontal u-list--divided">
            ...
            </ul>
            `}
          />
        </aside>
        <aside>
          <h3>Vertical List - Underlined</h3>
          <ul class="u-list-vertical u-list--underlined">
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
            <li>
              <a href="#">Link in a list</a>
            </li>
          </ul>
          <h4>Code</h4>
          <Source
            code={dedent`
            <ul class="u-list-vertical">
            ...
            </ul>
            `}
          />
        </aside>
      </Grid>
    </Section>
  </>
);

// 3.4. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################