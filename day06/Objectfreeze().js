const employee=
{
    name:"Kavivarshni",
    age:22,
    city:"Tiruppur",
    qualification:"Bsc",
    clge:"KEC"           
}

 Object.freeze(employee);   //once object is freezed their property cannot be modified
console.log(employee);

employee.city="salem";
console.log(employee.city);

console.log(Object.isFrozen(employee));