
let student=class 
{
    constructor(name1,age,city)       //function declaration
    {
        this.name1=name1;
        this.age=age;
        this.city=city;
    }
    display()
    {
        console.log(this.name1);
        console.log(this.age);
        console.log(this.city);
    }
};   
let s1=new student("Kavivarshni",22,"Tiruppur");
let s2=new student("Ranjeeth",25,"Erode");
s1.display();
s2.display();       
