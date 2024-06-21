const employee={
    name:"Kanimozhi",
    age:78
}
Object.assign(employee,{
    name:"Kavivarshni",
    age:21,
    Qualification:"Bsc",
    college:"KEC",
    city:"Tiruppur"
});
console.log(employee);



const student={...employee,...{State:"TamilNadu",Country:"India"}};
console.log(student);

