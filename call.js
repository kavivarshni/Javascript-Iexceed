student={
     name:"Kavivarshni",
     role:"UI/UX developer"
};
parent={
    fathername:"Muthurathinam",
    mothername:"Sumathi"
}
employee={
    name:"kani",
    display:function()
    {
        console.log(this.name);
        console.log(this.role);
        console.log(this.fathername);
        console.log(this.mothername);
    }
};
employee.display.apply([student,parent]);
