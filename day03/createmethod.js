
let student={
    clg:"KONGU ENGINEERING COLLEGE",
    "Ug Qualification":"BSc",
    cal_age:function()
    {
        let currentyear=new Date().getFullYear();
        let age=currentyear-this.dob;
        console.log("Your current age = "+age);
    }
}
let table={
    5:"Chennai",
    4:"Coimbatore",
    1:"Tirupur",
    3:"Salem",
    2:"Erode"
   
}
for(i in table)
    {
        console.log(table[i]);
    }
var s1=Object.create(student)
s1.name="Kavivarshni"
s1.dob=2003
console.log(s1.dob);
console.log(s1.name);
s1.cal_age();
console.log(student.clg);
student['Ug Qualification']="Btech"
console.log(student["Ug Qualification"]);
 
var s2=Object.create(student)
s2.name="Ranjeeth"
s2.dob=1999
console.log(s2.dob);
console.log(s2.name);
s2.cal_age();