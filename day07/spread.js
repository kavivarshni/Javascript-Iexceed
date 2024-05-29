//Spread Operator
let value=[1,2,3,4,5];
console.log(Math.max(...value));


let a=[3,6,9,12,15,18,21];
let b=[9,18,27,36,45,54,63];
let merge=[...a,111,...b];
console.log(Math.max(...merge));