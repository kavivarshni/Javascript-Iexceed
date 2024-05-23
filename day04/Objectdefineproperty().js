const student={};
Object.defineProperty(student,"name",{
    value:"Kavivarshni",
    writable:true                 //by default it is false
});
console.log(student.name);
student.name="Kanimozhi";
console.log(student.name);

Object.defineProperty(student,"date",{
    get()
    {
        return new Date();
    }
});
console.log(student.date);