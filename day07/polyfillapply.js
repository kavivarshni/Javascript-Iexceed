
employee={
    name:"Kavivarshni",
    id:21,
};
student={
      display:function(city,phoneno)

      {
          console.log(this.name);
          console.log(this.id);
          console.log(city);
          console.log(phoneno);
      }
};

student.display.apply(employee,["Tiruppur",9786056188]);      //Apply can send many arguments whereas it is not possible in call and Bind method