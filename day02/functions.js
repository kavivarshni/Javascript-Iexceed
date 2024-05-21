var z=20;                                  //Global Variable
function Multiplication(x,y,z)
{
    return x*y*z;
}
console.log(Multiplication(10,8,z));

function showMessage(name,age,city)
{
    console.log(name+" "+age+" "+city);
}
//console.log(name+" "+age+" "+city);       cannot print the function block values outside
showMessage("Kavivarshni",22,"Tiruppur");

function factorial(x)
{
    let fact=1;
    for(let i=1;i<=x;i++)
        {
            fact*=i;
        }
        console.log(fact);
}
factorial(5);


function default_value(name,city=returnmycity("Tiruppur"))
{
    console.log(name+" "+city);
}
function returnmycity(city)
{
    return city +" Tirupathi";
}
default_value("Kavivarshni","Madurai");
default_value("Kavivarshni");



function default_value2(name,city)
{
    if(city==undefined)
    {
        city="Madurai";
    }
    console.log(name+city);
}
default_value2("Ranjeeth");

