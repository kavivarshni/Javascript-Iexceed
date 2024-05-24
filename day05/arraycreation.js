//creation of Array using literal
var fruits=["Apple","Orange","grapes","Strawberry"];       //-->Objects
fruits[5]="banana";
console.log(fruits);
for(let i=0;i<fruits.length;i++)
    {
        console.log(fruits[i]);
    }


    //Array creation using new keyword
    var palace=new Array("salem","erode","Thiruchi");
    palace[0]="Salem";
    palace[1]="Erode";
    palace[2]="coimbatore";
    for(let i=0;i<palace.length;i++)
        {
            console.log(palace[i]);
        }

var games=[];
games.push("chess","volleyball","Throwball","football");//index is upto  3
games[5]="carrom";
console.log(games);

