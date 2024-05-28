//A closure is the combination of a function bundled together (enclosed) with references to its surrounding 
//state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
function a()
{
    let x=10;
    function b()
    {
        console.log(x);
    }
    b();
}
a();