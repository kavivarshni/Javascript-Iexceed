student={
     name:"Kavivarshni",
     role:"UI/UX developer"
};

employee={
    name:"kani",
    display:function(...args)
    {
        console.log(this.name);
        console.log(this.role);
    }
};
employee.display.call(student);
