// PARTS - DATA ################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import '../src/button.css';
import '../src/flag.css';
import '../src/data.css';
import '../src/sticker.css';


import Section from '../../../buckets/section/src';
import Grid from '../../../buckets/grid/src';

import List from '../../../../storybook-components/List';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: '01 Cement/Parts',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.3. BUTTON .................................................................

export const PartButton = (args) => (
  <>
    <Section noLeft noRight noTop>
      <h3>Primary Buttons</h3>
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
  </>
);

// 3.3. END ....................................................................

// 3.4. FLAG .................................................................

export const PartFlag = (args) => (
  <>
    <Section noLeft noRight noTop>
      <h3>Flag</h3>
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
  </>
);

// 3.4. END ....................................................................

// 3.5. DATA ...................................................................

export const PartData = (args) => (
  <>
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
    <Section noLeft noRight noTop>
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
  </>
);

// 3.5. END ....................................................................

// 3.6. DATA ...................................................................

export const PartSticker = (args) => (
  <>
    <Section noLeft noRight noTop>
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

// 3.6. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
