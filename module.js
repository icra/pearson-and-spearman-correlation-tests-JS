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
