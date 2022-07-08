Source: https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient

Use in Javascript:

```javascript
import * as m from './module.js';

let spearman = m.spearman;

let R = spearman(
  [56,75,45,71,62,64,58,80,76,61],
  [66,70,40,60,65,56,59,77,67,63],
);

console.log(R); //0.6727272727272727
```

