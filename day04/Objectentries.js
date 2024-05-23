//Object.entries -->which is used to convert object into TwodArray

const employee={
    name:"Ranjeeth",
    age:25,
    Job:"Health Inspector",
    city:"Tiruppur",
    state:"Tamil Nadu"
}
console.log(employee);
emp1=Object.entries(employee);      //Converted to Object
console.log(emp1);

//Object.fromentries --> To convert TwodArray to object
emp2=Object.fromEntries(emp1);            
console.log(emp2);