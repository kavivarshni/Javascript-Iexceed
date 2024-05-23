//Object.fromentries -->which is used to convert TwodArray into Object

const employee={
    name:"Ranjeeth",
    age:25,
    Job:"Health Inspector",
    city:"Tiruppur",
    state:"Tamil Nadu"
}

emp1=Object.entries(employee);      //Converted to Object
console.log(emp1);


emp2=Object.fromEntries(emp1);            
console.log(emp2);