// ///////////////////////////////////////
// // Lecture: Hoisting
// //Hoisting is only work for function declearation
 
// calculateAge(1987)
// function calculateAge(year){
//    console.log(2019-year);
// }


// //Hoisting is not work for fucntion expression
// //retirement(1987)
// var retirement = function(year){
//   console.log(65 - (2019 - year));
// }

// retirement(1987)


// //Hoisting for variable, in creation phase of variable object 
// console.log(age)
// var age = 123; // output:undefined
// //console.log(age)

// function foo(){ 
//     console.log(age)
//     var age = 65;
//     console.log(age)
// }

// foo();
// console.log(age)

// //console.log(year)//output:error












///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

*/


///////////////////////////////////////
// Lecture: The this keyword
//console.log(this)

calculateAge(1987)

function calculateAge(year){
   console.log(2019-year)
   console.log(this)
}


console.log("***************************")

var John = {
    name:"John",
    yearOfBirth:1987,
    calculateAge:function(){
        console.log(this)
        console.log(2019-this.yearOfBirth)

        // function innerFunction(){
        //     console.log(this)
        // }

        // innerFunction()
    }
}

John.calculateAge();
console.log("***************************")


var Mike = {
    name:"Mike",
    yearOfBirth:1980
}
//Method borrowing
Mike.calculateAge = John.calculateAge;
Mike.calculateAge()









