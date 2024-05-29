display=function()
{
    let arr=["salem","Tiruppur","Coimbatore","Tiruchi"];
    for(i of arr)
        {
            if(i=="salem")
                {
                    console.log("Welcome to Salem Smart city");
                }
        }
}
display1=function()
{
    console.log("Welcome to Timing Events");
}
display4=function(x,y)
{
    console.log(x*y)
}
setTimeout(display,4000);
setTimeout(display1,2000);
setTimeout(display4,1000,10,20);