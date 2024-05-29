let student={
    name:"Kavivarshni",
};

let employee={
    name:"Kanimozhi",
    display:function()
    { 
        console.log(this.name);
    }
};
employee.display.bind(student)();
