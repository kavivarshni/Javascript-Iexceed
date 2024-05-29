display=function(name,city)
{
    this.name=name;
    this.city=city;
    console.log(`${this.name} ${this.city}`);
}
setInterval(display,1000,"Kavivarshni","Tiruppur");
