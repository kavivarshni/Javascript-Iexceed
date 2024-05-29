//prototypal Inheritance
let parent={
    calculateAge:function(dob)
    {
        this.dob=dob;
        console.log(new Date().getFullYear()-this.dob);
    }
};
let child={
    
};
child.__proto__=parent;
child.calculateAge(2003);