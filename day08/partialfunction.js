//Partial Function
function display(arr1,values)
{
    var arr1=new Array();
    arr1.push(values);
    for(i of arr1)
   {
    console.log(i);
   }
    
}
let writetoarray=display.bind(null,"element");
writetoarray("Hiii");
writetoarray("hello");
writetoarray("Welcome");




function multiply(x,y)
{
    return x*y;
}
let varmulti=multiply.bind(null,2);
console.log(varmulti(3));
console.log(varmulti(4));