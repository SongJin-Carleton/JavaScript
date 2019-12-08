var Mark = {
   fullName:"Mark",
   mass:100,
   height:1.78,
   //BMI:0,
   BMIfunction:function(){
     this.BMI = this.mass /(this.height * this.height);
     return this.BMI;
   }
}

var John = {
  fullName:"John",
  mass:90,
  height:1.70,
  //BMI:0,
  BMIfunction:function(){
    this.BMI = this.mass /(this.height * this.height);
    return this.BMI;
  }

}

function compareFunction(JohnBMI,MarkBMI){
  if(JohnBMI > MarkBMI){
    console.log("John's BMI is: " + JohnBMI + " Mark's BMI is: " + MarkBMI + ". So John's heigher.")
  }else if(JohnBMI < MarkBMI){
    console.log("John's BMI is: " + JohnBMI + " Mark's BMI is: " + MarkBMI + ". So Mark's heigher.")}
    else {
      console.log("John's BMI is: " + JohnBMI + " Mark's BMI is: " + MarkBMI + ". So they are equal.")
    }
  }

  console.log("#######################################")
  compareFunction(John.BMIfunction(),Mark.BMIfunction());

  // console.log("***********************************")
  // John.BMIfunction();
  // Mark.BMIfunction();
  // compareFunction(John.BMI,Mark.BMI);
