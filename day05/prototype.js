function student(name,age,city)
{
    this.name=name;
    this.age=age;
    this.city=city;
}
    student.prototype.displaystudent=function()
    {
        return(`${this.name} ${this.age} ${this.city}`);
    }

s1=new student("Kavi",22,"Tirupur");
s2=new student("Hari",2,"Coimbatore");

console.log(s1);