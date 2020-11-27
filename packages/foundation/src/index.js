// FOUNDATION ##################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

// 1.1. END ....................................................................

// 1.2. STYLESHEET .............................................................

// 1.2.1. VARIABLES

const Variables = createGlobalStyle`
  :root {

    --color-white-rgb:          255, 255, 255;
    --color-lighter-rgb:          245, 249, 250;
    --color-light-rgb:          230, 231, 232;
    --color-rgb:                133, 136, 143;
    --color-dark-rgb:           34,40,53;
    --color-darker-rgb:         10,16,30;
    --color-black-rgb:          0,0,0;
    
    --color-white:              rgba(var(--color-white-rgb), 1);
    --color-lighter:              rgba(var(--color-lighter-rgb), 1);
    --color-light:              rgba(var(--color-light-rgb), 1);
    --color:                    rgba(var(--color-rgb), 1);
    --color-dark:               rgba(var(--color-dark-rgb), 1);
    --color-darker:             rgba(var(--color-darker-rgb), 1);
    --color-black:              rgba(var(--color-black-rgb), 1);

    --color-red-rgb:            237,108,99;
    --color-orange-rgb:         246,139,57;
    --color-green-rgb:          93,226,165;
    --color-blue-rgb:           66,175,227;
    
    --color-red:                rgba(var(--color-red-rgb), 1);
    --color-orange:             rgba(var(--color-orange-rgb), 1);
    --color-green:              rgba(var(--color-green-rgb), 1);
    --color-blue:               rgba(var(--color-blue-rgb), 1);

    --color-wm-blue-rgb:        3,221,246;
    --color-wm-purple-rgb:      183,105,247;
    --color-wm-red-rgb:         255,102,113;
    --color-wm-yellow-rgb:      255,199,131;
    
    --color-wm-blue:            rgba(var(--color-wm-blue-rgb), 1);
    --color-wm-purple:          rgba(var(--color-wm-purple-rgb), 1);
    --color-wm-red:             rgba(var(--color-wm-red-rgb), 1);
    --color-wm-yellow:          rgba(var(--color-wm-yellow-rgb), 1);

    --color-primary-rgb:        61,68,136;
    --color-secondary-rgb:      24,34,59;

    --color-primary:            rgba(var(--color-primary-rgb), 1);
    --color-secondary:          rgba(var(--color-secondary-rgb), 1);
    --color-accent:             var(--color-wm-red);

    --color-facebook:           #3b5998;
    --color-linkedin:           #0077B5;
    --color-google:             #dd4b39;

    --color-body:               var(--color-lighter);

    --color-headings:           var(--color-darker);
    --color-sub-headings:       var(--color-dark);
    --color-copy:               var(--color-dark);
    --color-sub-copy:           var(--color);

    --color-link:               var(--color-wm-blue);

    --family-primary:           "Roboto", Helvetica, Arial;
    --family-secondary:         "Gilroy", Helvetica, Arial;

    --font-xxlarge-size:        3.157rem;
    --font-xxlarge-lineHeight:  3.5rem;
    --font-xlarge-size:         2.369rem;
    --font-xlarge-lineHeight:   2.7rem;
    --font-large-size:          1.777rem;
    --font-large-lineHeight:    2rem;
    --font-medium-size:         1.333rem;
    --font-medium-lineHeight:   1.7rem;
    --font-normal-size:         1rem;
    --font-normal-lineHeight:   1.4rem;
    --font-small-size:          0.75rem;
    --font-small-lineHeight:    0.9rem;

    --weight-thin:              100;
    --weight-light:             300;
    --weight-regular:           400;
    --weight-medium:            500;
    --weight-semiBold:          600;
    --weight-bold:              700;
    --weight-heavy:             900;

    --layer-1:                  10;
    --layer-2:                  20;
    --layer-3:                  30;
    --layer-4:                  40;
    --layer-5:                  50;
    --layer-6:                  60;
    --layer-7:                  70;
    --layer-8:                  80;
    --layer-9:                  90;
    --layer-10:                 100;

    --gutter:                   20px;
    --gutter-small:             10px;
    --gutter-medium:            40px;
    --gutter-large:             80px;
    --gutter-jumbo:             120px;

    --radius-small:             5px;
    --radius-medium:            10px;
    --radius-large:             20px;
    
    --shadow:                   1px 1px 10px rgba(0,0,0, 0.25);
    --shadow-text:              0px 0px 10px rgba(0,0,0, 0.85);
    --shadow-text-light:        0px 0px 5px rgba(0,0,0, 0.25);
    
    --transition:               0.5s;
    --transition-slow:          1s;
    --transition-fast:          0.3s;

    --btn-font:                 var(--family-secondary);
    --btn-font-weight:          var(--weight-bold);
    --btn-radius:               var(--radius-small);
    
    --btn-primary--color:   var(--color-secondary);
    --btn-primary--colorH:  var(--color-accent);
    --btn-primary--bg:      var(--color-accent);
    --btn-primary--bgH:     var(--color-secondary);
    --btn-primary--border:  var(--color-accent);
    --btn-primary--borderH: var(--color-secondary);
    
    --btn-primary-danger--color:   var(--color-white);
    --btn-primary-danger--colorH:  var(--color-red);
    --btn-primary-danger--bg:      var(--color-red);
    --btn-primary-danger--bgH:     var(--color-white);
    --btn-primary-danger--border:  var(--color-red);
    --btn-primary-danger--borderH: var(--color-red);

    --btn-primary-warning--color:   var(--color-white);
    --btn-primary-warning--colorH:  var(--color-orange);
    --btn-primary-warning--bg:      var(--color-orange);
    --btn-primary-warning--bgH:     var(--color-white);
    --btn-primary-warning--border:  var(--color-orange);
    --btn-primary-warning--borderH: var(--color-orange);

    --btn-primary-success--color:   var(--color-white);
    --btn-primary-success--colorH:  var(--color-green);
    --btn-primary-success--bg:      var(--color-green);
    --btn-primary-success--bgH:     var(--color-white);
    --btn-primary-success--border:  var(--color-green);
    --btn-primary-success--borderH: var(--color-green);



    --btn-secondary--color:   var(--color-secondary);
    --btn-secondary--colorH:  var(--color-secondary);
    --btn-secondary--bg:      'transparent';
    --btn-secondary--bgH:     'transparent';
    --btn-secondary--border:  var(--color-accent);
    --btn-secondary--borderH: var(--color-secondary);

    --btn-secondary-danger--color:   var(--color-red);
    --btn-secondary-danger--colorH:  var(--color-white);
    --btn-secondary-danger--bg:      transparent;
    --btn-secondary-danger--bgH:     var(--color-red);
    --btn-secondary-danger--border:  var(--color-red);
    --btn-secondary-danger--borderH: var(--color-white);
    
    --btn-secondary-warning--color:   var(--color-orange);
    --btn-secondary-warning--colorH:  var(--color-white);
    --btn-secondary-warning--bg:      transparent;
    --btn-secondary-warning--bgH:     var(--color-orange);
    --btn-secondary-warning--border:  var(--color-orange);
    --btn-secondary-warning--borderH: var(--color-white);

    --btn-secondary-success--color:   var(--color-green);
    --btn-secondary-success--colorH:  var(--color-white);
    --btn-secondary-success--bg:      transparent;
    --btn-secondary-success--bgH:     var(--color-green);
    --btn-secondary-success--border:  var(--color-green);
    --btn-secondary-success--borderH: var(--color-white);
    
    

    
    
    --btn-icon-default--color:   var(--color-secondary);
    --btn-icon-default--colorH:  var(--color-accent);
    --btn-icon-default--bg:      var(--color-accent);
    --btn-icon-default--bgH:     var(--color-secondary);
    --btn-icon-default--border:  var(--color-accent);
    --btn-icon-default--borderH: var(--color-secondary);
    
    --btn-icon-secondary--color:   var(--color-secondary);
    --btn-icon-secondary--colorH:  var(--color-secondary);
    --btn-icon-secondary--bg:      var(--color-white);
    --btn-icon-secondary--bgH:     var(--color-accent);
    --btn-icon-secondary--border:  var(--color-accent);
    --btn-icon-secondary--borderH: var(--color-secondary);
    
    --btn-icon-danger--color:   var(--color-white);
    --btn-icon-danger--colorH:  var(--color-red);
    --btn-icon-danger--bg:      var(--color-red);
    --btn-icon-danger--bgH:     var(--color-white);
    --btn-icon-danger--border:  var(--color-red);
    --btn-icon-danger--borderH: var(--color-white);

    --btn-icon-secondary-danger--color:   var(--color-red);
    --btn-icon-secondary-danger--colorH:  var(--color-white);
    --btn-icon-secondary-danger--bg:      var(--color-white);
    --btn-icon-secondary-danger--bgH:     var(--color-red);
    --btn-icon-secondary-danger--border:  var(--color-red);
    --btn-icon-secondary-danger--borderH: var(--color-red);

    --btn-icon-success--color:   var(--color-white);
    --btn-icon-success--colorH:  var(--color-green);
    --btn-icon-success--bg:      var(--color-green);
    --btn-icon-success--bgH:     var(--color-white);
    --btn-icon-success--border:  var(--color-green);
    --btn-icon-success--borderH: var(--color-white);

    --btn-icon-secondary-success--color:   var(--color-green);
    --btn-icon-secondary-success--colorH:  var(--color-white);
    --btn-icon-secondary-success--bg:      var(--color-white);
    --btn-icon-secondary-success--bgH:     var(--color-green);
    --btn-icon-secondary-success--border:  var(--color-green);
    --btn-icon-secondary-success--borderH: var(--color-green);

    --btn-icon-warning--color:   var(--color-white);
    --btn-icon-warning--colorH:  var(--color-orange);
    --btn-icon-warning--bg:      var(--color-orange);
    --btn-icon-warning--bgH:     var(--color-white);
    --btn-icon-warning--border:  var(--color-orange);
    --btn-icon-warning--borderH: var(--color-white);

    --btn-icon-secondary-warning--color:   var(--color-orange);
    --btn-icon-secondary-warning--colorH:  var(--color-white);
    --btn-icon-secondary-warning--bg:      var(--color-white);
    --btn-icon-secondary-warning--bgH:     var(--color-orange);
    --btn-icon-secondary-warning--border:  var(--color-orange);
    --btn-icon-secondary-warning--borderH: var(--color-orange);

  }
`;

// 1.2.1. END

// 1.2.1. VARIABLES

const Stylesheet = createGlobalStyle`

  * {
    font-family: var(--family-primary);
    font-size: var(--font-normal-size);
    line-height: var(--font-normal-lineHeight);
  }

  html {
    font-size: 0.875em;
    line-height: 1.45;
    color: var(--color-copy);
  }

  html, body {
    min-height: 100vh;
    background-color: var(--color-body);
  }

  body {
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media screen and (min-width: 80em) {
    html {
      font-size: calc(1em + 0.25 * (100vw - 80em) / 40); /* 1 */
      font-size: -webkit-calc(100% + 0.25 * (100vw - 8000%) / 40); /* 2 */
      font-size: -ms-calc(1em + 0.25 * (100vw - 80em) / 40); /* 3 */
    }
  }

  @media screen and (min-width: 120em) {
    html {
      font-size: 1.125em;
    }
  }

  html, body,
  h1, h2, h3, h4, h5, h6,
  a, p, span,
  em, small, strong,
  sub, sup,
  mark, del, ins, strike,
  abbr, dfn,
  blockquote, q, cite,
  code, pre,
  ol, ul, li, dl, dt, dd,
  div, section, article,
  main, aside, nav,
  header, hgroup, footer,
  img, figure, figcaption,
  address, time,
  audio, video,
  canvas, iframe,
  details, summary,
  fieldset, form, label, legend,
  table, caption,
  tbody, tfoot, thead,
  tr, th, td {
      font-size: inherit;
      margin: 0;
      padding: 0;
      border: 0;
  }
  article,
  aside,
  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }
  * {
    box-sizing: border-box;
  }
  *:before,
  *:after {
    box-sizing: inherit;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  img,
  video {
    max-width: 100%;
  }
  img {
    border-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: "";
    content: none;
  }
  [hidden] {
    display: none !important;
  }
  [disabled] {
    cursor: not-allowed;
  }
  :focus:not(:focus-visible) {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: var(--gutter);
  }

  h1, h2, h3 {
    color: var(--color-headings);
  }

  h4, h5, h6 {
    color: var(--color-sub-headings);
  }

  h1 {

    font-family: var(--family-secondary);
    font-weight: var(--weight-bold);

    margin-bottom: var(--gutter-medium);
    
    font-size: var(--font-xxlarge-size);
    line-height: var(--font-xxlarge-lineHeight);
    
  }

  h2 {
    font-family: var(--family-secondary);
    font-weight: var(--weight-bold);

    margin-top: 0;
    margin-bottom: var(--gutter);

    font-size: var(--font-xlarge-size);
    line-height: var(--font-xlarge-lineHeight);

  }

  h3 {
    font-size: var(--font-large-size);
    line-height: var(--font-large-lineHeight);
  }

  h4 {
    font-size: var(--font-normal-size);
    line-height: var(--font-normal-lineHeight);
  }

  h3, h4 {
    font-family: var(--family-primary);
    font-weight: var(--weight-regular);
  }

  h5, h6 {
    font-family: var(--family-secondary);
    font-weight: var(--weight-bold);
    font-size: var(--font-small-size);
    line-height: var(--font-small-lineHeight);
  }

  p {
    color: var(--color-copy);
    &:not(:last-child) {
      margin-bottom: var(--gutter);
    }
  }

  small {
    font-size: var(--font-small-size);
    line-height: var(--font-small-lineHeight);
    color: var(--color-sub-copy);
  }

  ul, ol {
    &:not(:last-child) {
      margin-bottom: var(--gutter);
    }
  }

  ul li {
  }

  ol {
    counter-reset: my-awesome-counter;
  }
  ol li {
    counter-increment: my-awesome-counter;
    position: relative;
    padding-left: var(--gutter);
  }
  ol li::before {
    position: absolute;
    left: 0;
    content: counter(my-awesome-counter) ".";
    color: var(--color-normal);
  }

  a,
  a:visited {

    color: inherit;
    color: var(--color-link);
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      cursor: pointer;
      color: var(--color-link-hover);
      text-decoration: underline;
    }

  }

`;

// 1.2.1. END

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Foundation = ({ children }) => {

  // 2.1. FUNCTIONS ............................................................
  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (
    <>
      <Variables />
      <Stylesheet />
      { children }
    </>
  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Foundation.propTypes = {
  children: propTypes.node.isRequired,
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Foundation;

// END OF FILE #################################################################
