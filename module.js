//https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient
export function spearman(x,y){
  if(x.length!=y.length) throw("x and y have different length");

  //number of samples
  let n = x.length;

  //create new table
  let table=[];
  for(let i=0;i<n;i++){
    table.push({
      x:x[i],
      y:y[i],
      rank_x:null,
      rank_y:null,
      rank_diff_squared:null,
    });
  }

  //compute rank_x and rank_y
  for(let key of ['x','y']){
    table.sort((a,b)=>a[key]-b[key]);
    for(let i=0;i<n;i++){
      table[i]['rank_'+key]=i+1;
    };
  }

  //compute difference between rank_x and rank_y and square it
  for(let i=0;i<n;i++){
    let row = table[i];
    let rx = row.rank_x;
    let ry = row.rank_y;
    row.rank_diff_squared = Math.pow(rx-ry,2);
  }

  //sum all values from rank_diff_squared column
  let s = table.map(row=>row.rank_diff_squared).reduce((p,c)=>p+c,0);

  //compute spearman R
  let R = 1-6*s/(n*(n*n-1));

  //finish
  //console.log(table); //debug
  //console.log({s,R}); //debug
  return R;
}

//https://en.wikipedia.org/wiki/Pearson_correlation_coefficient
export function pearson(x,y){
  if(x.length!=y.length) throw("x and y have different length");

  //number of samples
  let n = x.length;

  //means
  let xm = x.mean();
  let ym = y.mean();

  //sum of diffs from mean
  let s_xy = 0;
  let ss_x = 0;
  let ss_y = 0;
  for(let i=0;i<n;i++){
    s_xy += (x[i]-xm)*(y[i]-ym);
    ss_x += Math.pow(x[i]-xm,2);
    ss_y += Math.pow(y[i]-ym,2);
  }

  //compute pearson's correlation coefficient
  let r = s_xy/(Math.sqrt(ss_x)*Math.sqrt(ss_y));
  return r;
}

//utils for numeric arrays
Array.prototype.sum=function(){return this.reduce((p,c)=>(p+c),0)};
Array.prototype.mean=function(){return this.length ? this.sum()/this.length : 0};
Array.prototype.std_dev=function(){
  let n = this.length;
  if(n<2) return 0;
  let m = this.mean();
  let sum_squared_diffs_from_mean = this.map(xi=>Math.pow(xi-m,2)).sum();
  return Math.sqrt(sum_squared_diffs_from_mean/(n-1));
  //test
  //console.log([2,4,4,4,5,5,7,9].std_dev());
};
