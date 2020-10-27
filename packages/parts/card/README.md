# Konstruct Sticker

The `<Sticker />` component is a very small display component to display typically numerical data with associated label.
## Installation

`yarn add @traaidmark/konstruct-parts-Sticker;`

## Usage

````
import React from 'react';
import Sticker from '@traaidmark/konstruct-parts-Sticker';

const DemoComponent = () => {
  
  return (
    <Sticker
      label="Amount"
      prefix="usd"
      value="23.00"
      size="default"
      align: "left"
      placement: "top"
    />
  );
};
export default DemoComponent;
````

Please visit our story book for detailed documentation!
