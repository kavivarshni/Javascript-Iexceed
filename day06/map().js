let numbers=[5,6,7,8,9];
console.log(numbers.map(x=>x*x));

mydata=["Kavi  " ,"  Ranjeeth","  DevaPriya",   "  Abhinaya"];
console.log(mydata.map(x=>x.trim()));

//Map is a Collection which takes keys in any datatype
let mymap=new Map();
mymap.set(1,1200);
mymap.set(2,2300);

mymap.set(true,'is_available');
console.log(mymap.get(true));
console.log(mymap.get(1));
console.log(mymap.has(1)); //has() to check wheather it is there or not .


console.log(mymap);


