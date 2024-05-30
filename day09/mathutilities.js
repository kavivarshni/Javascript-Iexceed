//The Math.tan() method returns the tangent of a number.
//The Math.tan() method expects the number in radians.
//The Math.tanh() method returns the hyperbolic tangent of a number

console.log(Math.tan(0));
console.log(Math.tanh(Infinity));

degree1=30;
degree2=30;
degree3=30;
let radians1=degree1*Math.PI/180;
let radians2=degree2*Math.PI/180;
let radians3=degree3*Math.PI/180;
console.log("Sin = "+Math.sin(radians1).toFixed(2));
console.log("Cos = "+Math.cos(radians2).toFixed(2));
console.log("Tan = "+Math.tanh(radians3).toFixed(2));


//Math.round returna the approximate value
console.log(Math.round(32.7));
console.log(Math.round(32.2));


//Math.max returns the highest value
let b=Math.max(2,6,8,134,3,0,-1);
console.log(b);

//Math.min returns the smallest number
let bc=Math.min(2,6,8,134,3,0,-1);
console.log(bc);


//Math.floor() rounds a number DOWN to the nearest integer:
console.log(Math.floor(2.1));
console.log(Math.floor(2.5));
console.log(Math.floor(2.9));
