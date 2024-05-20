//Type Conversions 
//1.Implicit Convertion
var x="2"+23;
console.log(typeof(x)+" - " +x)
var x="10"-"2";
console.log(typeof(x)+" - " +x);
var x="100"+null;
console.log(typeof(x)+" - " +x);  

//2.Expilicit Convertion
let n=String(1);
console.log(typeof(n)+" - " +n);
let a=Boolean(1)
console.log(typeof(a)+" - " +a);
let b=Number("3")
console.log(typeof(b)+" - " +b);
let c=String(true)
console.log(typeof(c)+" - " +c);