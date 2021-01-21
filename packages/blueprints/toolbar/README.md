# Konstruct > Buckets > Toolbar

A simple toolbar component you can use to add tools and features to headings.

## Installation

`yarn add @traaidmark/konstruct-bucket-toolbar;`

## Usage

````
<Toolbar
  heading="Why we are so great"
  headingAs={ (props) => <h2 { ...props } }
  text={ <>Nulla leo odio, ullamcorper vel enim sed, maximus pretium sapien.</> }
  actions=[
    <a>Sign Up now</a>,
    <a>Do this other thing</a>
  ],
/>
````

## Documentation

You can find detailed documentation at [https://konstruct.traaidmark.com](https://konstruct.traaidmark.com/?path=/docs/bucket-toolbar--demo)
