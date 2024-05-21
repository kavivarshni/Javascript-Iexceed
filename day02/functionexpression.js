//mydata();                  Cannot access 'mydata' before initialization  in function expression

let mydata=function()
{
    console.log("Function definition");
}
mydata();

let age=17;
if(age<18)
    {
        checkme=function()
        {
            console.log("Under 18");
        }
    }
else
{
    checkme=function()
    {
        console.log("Above 18");
    }
}
checkme();