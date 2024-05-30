let p=new Promise(function(resolved1,reject1)
{
    let name="kavivarshni";
    if(name.startsWith("k"))
        {
            resolved1();
        }
        else{
            reject1();
        }
})
p.then((resolved1)=>
{
    console.log("Good Resolved");
}).catch((reject1)=>{
    console.log("Sorry Rejected");
})
