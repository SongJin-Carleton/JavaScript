// console.log("Hello Another World!")
// var firstName = "Kira";
// console.log(firstName);

// var fullAge  = true;
// console.log(fullAge);


// // 
// /*

// var num
// console.log(num)

// console.log(job)


// */

// var name = "Hello";
// var num = 100;

// console.log(name + num)

// var num1 = "1"
// var num2 = "1"

// // console.log(num1 + num2);
// // alert(num1 + num2)

// var MarkMass = prompt("Hi Mark, Please input your mass")
// console.log(MarkMass);
// var MarkHeight = prompt("Hi Mark, Please input your height")
// console.log(MarkHeight)

// var JohnMass = prompt("Hi John, Please input your mass")
// console.log(JohnMass)
// var JohnHeight = prompt("Hi John, Please input your height")
// console.log(JohnHeight);

// var MarkBMI = MarkMass / (MarkHeight * MarkHeight);
// var JohnBMI = JohnMass / (JohnHeight * JohnHeight);

// console.log("MarK's BMI is: " + MarkBMI)
// console.log("John's BMI is; " + JohnBMI)

// var result = MarkBMI > JohnBMI

// console.log("Mark has a heigher BMI than John: " + result)


/* Basic Operator */

/* if else */

var name = "John";
var status = "single";
var age = 20;
var job = "Doctor"
var height = 0;


if(status === "single"){
  console.log( name + " is single")
}else{
  console.log(name + " is married")
}

//age >= 18 ? console.log(name + " is adult. "):console.log(name + "is still a child.")

switch(true){

  case (age < 18):
    console.log("Hi child.")
    break;
  case (age >= 18):
    console.log("Hi I am a adult.")
    break;
  default:
    console.log("You input a wrong number.")

}

switch(job){
      case "Teacher":
        console.log("Hi I am a teacher.")
        break;
      case "Doctor":
        console.log("Hi I am a doctor.")
        break;
      case "Engineer":
        console.log("Hi I am a engineer.")
        break;
      default:
        console.log("Hi I don't have a job.")
      
}

if(height || height === 0){
  console.log("Variable is defined");
}else{
  console.log("Variable is not been defined.")
}



