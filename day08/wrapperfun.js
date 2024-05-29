let student={
    name:"kavivarshni",
    greeting:function()
    {
        console.log(`${this.name}`);
    }
};
setTimeout(student.greeting,1000);//-->undefined because in this.name this represents the window Object

// setTimeout(function()
// {
//     student.greeting();
// },1000);

// setTimeout=()=>student.greeting(),1000;     //using arrow function in wrapper method
