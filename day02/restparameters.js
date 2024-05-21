function nydata(name,age,city,...args)
{
    console.log(name+age+city);
    console.log("Rest Parameter = "+args);
}
function mydata(...args)
{
    console.log(args);
}
nydata("Kavivarshni ",22," Tiruppur","Madurai","Tamil Nadu", "America");         //
mydata("salem","Tiruppur");

function mydata1(...args)
{
    console.log(args.sort());
}
mydata1(4,1,5,2,3); 
