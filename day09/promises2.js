new Promise((resolve,reject)=>
{
    cost=1000;
    if(cost>=1000)
        {
            resolve(10);
        }
        else{
            reject(5);
        }
}).then((discount)=>
    {
        console.log(cost*(discount/100)+cost);
    }
).catch((discount)=>
    {
        console.log(cost*(discount/100)+cost);
    }
);


