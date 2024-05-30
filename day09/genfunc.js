function *factorial(n)
{
    let fact=1,i=1;
    while(i<=n)
        {
             yield fact*=i;
            i++;
        }
}
let res=factorial(5);
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);