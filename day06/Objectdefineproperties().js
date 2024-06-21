const employee={
      age:22,
      college:"KEC"
}
Object.defineProperty(employee,{
    name:{
        value:"Kavi",
        writable:true
    },
    city:{
          value:"Coimbatore",
          writable:false
    }
})
Object.defineProperties(employee,{
    name:{
     value:"Kavivarshni",
      writable:true
    },
    city:{
      value:"Tiruppur"
    },
});
employee.name="Thanushya";
delete employee.college;    //can delete existing properties
delete employee.city;
console.log(employee.name);
console.log(employee.city);
console.log(employee)