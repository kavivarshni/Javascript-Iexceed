let s1=new student("Kavivarshni",22,"Tiruppur");
let s2=new student("Ranjeeth",25,"Erode");

class student
{
    constructor(name,age,city)       //function declaration
    {
        this.name=name;
        this.age=age;
        this.city=city;
    }
    display()
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }
}
s1.display();
s2.display();

