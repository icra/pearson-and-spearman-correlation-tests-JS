Source: https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient

The Spearman correlation between two variables is equal to the Pearson
correlation between the rank values of those two variables; while Pearson's
correlation assesses linear relationships, Spearman's correlation assesses
monotonic relationships (whether linear or not). If there are no repeated data
values, a perfect Spearman correlation of +1 or −1 occurs when each of the
variables is a perfect monotone function of the other.

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
