let myset=new Set();
myset.add("Java");
myset.add("Python");
myset.add(1000);

for(let i of myset)
    {
        console.log(i);
    }

myset.delete(1000);
console.log(myset);

