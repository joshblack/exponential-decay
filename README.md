# `exponential-decay`

## Usage

```bash
$ npm install exponential-decay --save
```

```js
import Decay from 'exponential-decay';

const decay = new Decay();
const handler = () => {
  console.log('Handler called');
};

// Register your handler that is triggered
// for each setTimeout callback called
decay.subscribe(handler);
```
