class student{
    constructor(x,y,z,...args)
    {
        this.x=x;
        this.y=y;
        this.z=z;
        console.log(args);
        let a=this.x+this.y+this.z;
        console.log("Addition = "+a);
        return a; //Constructor can return in Javascript  which is not possible in java 
    } 
}
s=new student(3,6,9,12,15,18);
console.log(s);