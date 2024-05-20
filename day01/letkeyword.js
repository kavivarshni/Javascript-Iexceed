//let Keyword declaration
let a=10;
let b=20;
//let a=30;  ->Redeclaration is NOT Possible in let Keyword
console.log("Using let Keyword i Value is NOT changed");
function tables()
{
    let i=100;
    for(let i=0;i<=3;i++)
    {
        console.log("Tables = "+i);
    }
    console.log("*** i = "+i+" ***");
}
tables();
console.log("Using var Keyword i value is Changed");
function tables1()
{
    var i=100;
    for(var i=0;i<=3;i++)
    {
        console.log("Tables = "+i);
    }
    console.log("*** i = "+i+" ***");
}
tables1();
let message;
message="hi";
message="helo"; //redeclaration is Possible in let for same variable name
console.log(message);



/*
let chat="hey whatsapp";
let chat="How r u";    This redeclaration is NOT Possible*/
