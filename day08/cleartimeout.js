display=function()
{
    let date=new Date();
    let time=date.toLocaleTimeString();
    console.log(time);
    let id=setTimeout(display,2000);      //it prints 
    clearTimeout(id);             //
}
display();
