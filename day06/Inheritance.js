//Inheritance
class A 
{
    constructor()
    {
        console.log("Constructor A is called");
        this.displayA();
    }
    displayA()
    {
        console.log("Method A is called");
    }
}
class B extends A
{
    constructor() 
    {
        super();
        console.log("Constructor B is called");
        this.displayB();
    }
    displayB()
    {
        console.log("Method B is called");
    }
}
let b=new B();
