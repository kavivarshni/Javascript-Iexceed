let p=new Promise((resolve,reject)=>{
    let year=2000;
    if(year%4==0 && year%400==0 || year%100!=0)
        {
            resolve();
        }
        else
        {
            reject();
        }
});
p.then((resolve)=>{
    console.log("Leap Year");
}).catch((reject)=>
{
    console.log("Not a Leap Year");
})