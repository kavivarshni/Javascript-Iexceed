
/*bind() -->It returns function
call()  -->It does not return as function
apply() -->It pass the argument as Array*/



//Create Function from String
let disp=new Function('x','y','return x*y');
console.log(disp(10,2));
function getfunc(value)
{
    let func=new Function(console.log(value));
    return func;
}
getfunc("Kavivarshni");
