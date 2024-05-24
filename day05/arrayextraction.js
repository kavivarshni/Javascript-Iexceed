var language=[];
language.push("Tamil","English","Hindi","Malayalam");

//Array EXtraction: Method 1
language.forEach((items,index)=>{console.log(`${index} ${items}`)});

//Array EXtraction: Method 2
for(let i of Object.keys(language))
    {
        console.log(language[i]);
    }