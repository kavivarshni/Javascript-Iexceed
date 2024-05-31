async function check(age)
{
     this.age=age;
     if(age>=18)
     {
        return Promise.resolve("Eligible for voting");
     }
     else
     {
        return Promise.reject("Not Eligible for Voting ");
     }
}
check(11).then((msg)=>
{
    console.log("Resolved = "+msg);
}).catch((msg)=>
{
    console.log("Rejected = "+msg);
});