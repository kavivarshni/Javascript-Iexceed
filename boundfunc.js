function log(...args)
{
    console.log(this,...args);
}
let bound1=log.bind("Hiii",1,2);
let bound2=log.bind("Hello",3,4);
let bound3=bound1("welcome",5,6);
let bound4=bound2("Nooo",8,9);








































