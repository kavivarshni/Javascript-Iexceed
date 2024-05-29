let count=0;
let timerid=setInterval(function countme()
{
    count+=1;
    for(i=0;i<20;i++)
        {
        if(count%5==0)
        {
            clearInterval(timerid);
        }
        let date=new Date();
        let time=date.toLocaleTimeString();
        console.log(time);
        break;
        
    }
},1000);