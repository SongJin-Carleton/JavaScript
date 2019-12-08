//****************function constructor
/*
var John = {
    name:'John',
    yearOfBirth:1990,
    job:'Teacher'
}

var Person  = function(name,yearOfBirth,job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function(){
  console.log(2019 - this.yearOfBirth)
}

Person.prototype.lastName = 'Hellen';

var john = new Person('John',1990,'Teacher');
john.calculateAge();
var jane = new Person('Jane',1998, 'Designer')
var mark = new Person ('Mark',1948,'Policeman')
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName)
console.log(jane.lastName)
console.log(mark.lastName)

*/

//**************Object.create

/*
var personProto = {
  calculateAge:function(){
    console.log(2019-this.yearOfBirth)
  }
}

var john = Object.create(personProto)
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher'

var jane = Object.create(personProto,{
  name:{value:'Jane'},
  yearOfBirth:{value:1900},
  job:{value:'Designer'}
})

john.calculateAge();
jane.calculateAge();


*/


/*
//*************Primitives vs Objects
var a = 23;
var b = a;
a = 100;

console.log(a)
console.log(b)


//Object
var Obj1 = {
  name:'John',
  age:50
}

var Obj2 = Obj1;
Obj1.age = 30
console.log(Obj1.age)
console.log(Obj2.age)

//Function
var age = 27;
var obj = {
  name:'Jane',
  city:'Toronto'
}
console.log(age);
console.log(obj.city)


function change(a,b){
   a = 20;
   b.city = 'Ottawa'
}

change(age,obj)
console.log(age)
console.log(obj.city)

*/

/*
//***************Passing functions as arguments

var year = [1980,1990,2000,2010,2020]

function arrayCalc(arr,func){
  var arrRes = [];
  for(var i = 0; i < arr.length; i++){
    arrRes.push(func(arr[i]));
  }

  return arrRes;
}


function calculateAge(el){
  return 2046 - el;
}

function isFullAge(age){
 return age >= 18;
}

var ages = arrayCalc(year,calculateAge);
console.log(ages)
var fullAges = arrayCalc(ages,isFullAge);
console.log(fullAges)

*/

/*
//****************IIFE

// function game(){
//   var score = Math.random() * 10;
//   console.log(score >= 5)
// }

// game()

// (function(){
//   var score = Math.random() * 10;
//   console.log(score >= 5)
// })()

// console.log(score);

(function(goodLuck){
  var score = Math.random() * 10;
  console.log("GoodLuck number: " + goodLuck)
  console.log(score >= 5 - goodLuck)
})(5)

*/


//************Closures


// function retirement(retirementAge){
//   var str = " years left until retirement."
//    return function(yearOfBirth){
//         var age = 2019 - yearOfBirth
//         console.log((retirementAge - age) + str)
//    }
// }

// var retirementUS = retirement(60);
// retirementUS(1990)
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990)
// retirementIceland(1990)



//retirement(60)(1960)

/*
function interview(job){

  var designer = ", can you please explan what UX design is?"
  var teacher = " What subject do you teach, "
  var str = " , What do you do? "


  return function(name){
    if(job === "designer"){
      console.log(name + designer)
    }else if(job === "teacher"){
      console.log(teacher + name)
    }else{
      console.log(name + str)
    }
  }

}

var john = interview("teacher")
john("John")

interview("designer")("Jimmy")
interview(" ")("Hellen")

*/


//**************** Bind, call and apply

var john = {
  name:'John',
  age:26,
  job:'Teacher',
  presentation:function(style,timeOfDay){
        if(style === "formal"){
          console.log('Good ' + timeOfDay + ' , Ladies and gentlemen! I\'m ' + this.name + ' my job is ' + this.job + ' ' )
        }else if( style === "friendly"){
         console.log('Hey! What\'s up ? I\'m ' + this.name + ' my job is ' + this.job + '. Have a nice ' + timeOfDay);
        }
  }
}


var emily = {
  name:'Emily',
  age:28,
  job:'designer'
};


john.presentation('formal','morning')
john.presentation.call(emily,"formal","afternoon")
//john.presentation.apply(emily,['formal ','afternoon'])

var johnFriendly = john.presentation.bind(john,'friendly')
johnFriendly('morning')
johnFriendly('night')

