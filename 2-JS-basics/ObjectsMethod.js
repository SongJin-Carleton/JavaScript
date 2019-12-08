
//Object and method

var John = {
  firstName:"John",
  lastName:"Smith",
  birthYear:1990,
  family:['Jane','Mark','Bob'],
  job:'teacher',
  isMarried:false,
  calculateAge:function(){
      return 2019 - this.birthYear
  }
};

console.log(John.calculateAge())
John.age = John.calculateAge()
console.log(John)