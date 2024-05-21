let day="Friday";
if(day=="Monday")
{
    console.log("Welcome its Monday");
}
else if(day=="Tuesday")
{
    console.log("Its Truthful Tuesday");
}
else if(day=="Wednesday")
{
    console.log("Its Warmfull Wednesday");
}
else if(day=="Thursday")
{
    console.log("Its Thoughtful Thursday");
}
else if(day=="Friday")
{
    console.log("Yeah Its Friday");
}
else
{
    console.log("Weekend");
}


//Ternary Chaining
let marks=58;
let result=marks<40?"ReAppear "
        :marks>40 && marks<=60?"B+ Grade" 
        :marks>60 && marks<=80?"A Grade"
        :marks>80 && marks<=100?"A+ Grade"
        :"Enter Proper Marks";
console.log(result);

//Ternary Operator
let age=20;
console.log("age<18"?"You are under 18":"You are eligible for voting");
console.log("Kavivarshni");

