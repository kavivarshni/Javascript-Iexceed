//Object seal()

const mypro1=
{
    property1:487
}
Object.seal(mypro1);
mypro1.property1=456;                     //can  change the existing property
mypro1.newproperty="hiii";
console.log(mypro1.property1);
console.log(mypro1.newproperty);