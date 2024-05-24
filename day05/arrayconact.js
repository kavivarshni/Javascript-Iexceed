
x=new Array(1,2,3);
y=new Array(4,5,6);
let z=x.concat(y);      //Y-->Reference Array      X-->Actual Array
console.log(z);
//Changes made in Actual will not reflect inside concatenated Array
//Changes made in Reference Array will reflect inside Concatenated Array.

x[0]=11;
y[0]=88;
console.log(x);
console.log(y);
console.log(x.concat(y));