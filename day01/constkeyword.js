const a=10;
//a=20;       ->Cannot assign values to Constant Variable
console.log(a)
//const b;
//b=20;        //cannot initialize after declaration 
const mydata=["Kavi","Ranjeeth","Muthu","Sumu"];
mydata[0]="Kavivarshni";    //Array values can be changed but cannot reassign another array in Constant
console.log(mydata);
console.log("Array to String : "+mydata.toString);