class student 
{
    static clge="kec";
    constructor(name,age,city)
    {
        this.name=name;
        this.age=age;
        this.city=city;
    }
    static displaystudent()
    {
        this.clge="BEC";             //can access static variable inside static method using this Keyword
        return (`${this.clge}`);
    }
}
s1=new student("Ranjeeth",25,"Tiruppur");
console.log(student.displaystudent());