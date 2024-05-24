//Inheritance without using class and extends using prototype based approach
function student(name,age,city)
{
    this.name=name;
    this.age=age;
    this.city=city;
}
student.prototype.displaystudent=function()
{
    return (`${this.name} ${this.age} ${this.city}`);
}
s1=new student("Kavivarshni",22,"AAthur");
function teacher(salary,yoe)
{
    this.salary=salary;
    this.yoe=yoe;
}
teacher.prototype=s1;
teacher.prototype.showteacher=function()
{
    return (`${this.salary} ${this.yoe}`);
}

t1=new teacher(120000,12);
console.log(t1.displaystudent());
console.log(t1.showteacher());