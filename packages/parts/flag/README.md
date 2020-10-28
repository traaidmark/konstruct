# Konstruct Sticker

The `<Data />` component is a very small display component to display typically numerical data with associated label.
## Installation

`yarn add @traaidmark/konstruct-parts-data;`

## Usage

````
import React from 'react';
import Data from '@traaidmark/konstruct-parts-data';

const DemoComponent = () => {
  
  return (
    <Data
      prefix="usd"
      value="23.00"
      size="default"
    />
  );
};
export default DemoComponent;
````

Please visit our story book for detailed documentation!
