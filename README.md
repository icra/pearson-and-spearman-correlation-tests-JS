
The Spearman correlation between two variables is equal to the Pearson
correlation between the rank values of those two variables; while Pearson's
correlation assesses linear relationships, Spearman's correlation assesses
monotonic relationships (whether linear or not). If there are no repeated data
values, a perfect Spearman correlation of +1 or −1 occurs when each of the
variables is a perfect monotone function of the other.

Source: https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient

Example of use:
```javascript
import * as m from './module.js';

let spearman = m.spearman;

let R = spearman(
  [56,75,45,71,62,64,58,80,76,61],
  [66,70,40,60,65,56,59,77,67,63],
);

console.log(R); //0.6727272727272727
```

The Pearson correlation coefficient is a measure of linear correlation between
two sets of data. It is the ratio between the covariance of two variables and
the product of their standard deviations; thus it is essentially a normalized
measurement of the covariance, such that the result always has a value between
−1 and 1. As with covariance itself, the measure can only reflect a linear
correlation of variables, and ignores many other types of relationship or
correlation.

Source: https://en.wikipedia.org/wiki/Pearson_correlation_coefficient

Example of use:
```javascript
import * as m from './module.js';

let pearson = m.pearson;

let R = pearson(
  [56,75,45,71,62,64,58,80,76,61],
  [66,70,40,60,65,56,59,77,67,63],
);

console.log(R); //0.8058805796401137
```
