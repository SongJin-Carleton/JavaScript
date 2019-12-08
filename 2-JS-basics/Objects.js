/* Objects and properties*/


//Object literal
var John = {
    firstName:"John",
    lastName:"Smith",
    birthYear:1990,
    family:['Jane','Mark','Bob'],
    job:'teacher',
    isMarried:false
};

console.log(John.birthYear)
console.log(John["job"])
John.job = "Student"
console.log(John["job"])

//new Object syntax
var jane = new Object();
jane.name = "Jane";
jane.age = 30;
jane.job = "Police"
console.log(jane)