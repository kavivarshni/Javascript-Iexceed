//Recursive Function 
function power_recursive(x)
{
    if(x==1)
        {
            return x;
        }
    else{
        return x*power_recursive(x-1);
    }
}
console.log(power_recursive(5));

