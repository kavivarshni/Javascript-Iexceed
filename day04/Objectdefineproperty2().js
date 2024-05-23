const mygame={
    status:"In Progress",
    score:[5,8,9,14]
};
Object.defineProperty(mygame,"MaxPlayer",{
    value:5,writable:true
});
console.log(mygame.MaxPlayer);

mygame.MaxPlayer=10;
console.log(mygame.MaxPlayer);

Object.defineProperty(mygame,"HighScore",{
    get()
    {
        return Math.max(...this.score);
    }
})
console.log(mygame.HighScore);

Object.defineProperty(mygame,"completed",{
    set(x)
    {
        if(x)
            {
                this.status="Result Announced you are Win";
            }
    }
});
mygame.completed=true;
console.log(mygame.status);
console.log(Object.keys(mygame));
console.log(Object.values(mygame));

