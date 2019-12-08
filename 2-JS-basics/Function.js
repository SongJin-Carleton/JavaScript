function calculateAge(birthYear){
  return 2019 - birthYear;
}

function yearsUntilRetirement(birthYear,name){
   var age = calculateAge(birthYear);
   var retirement = 65 - age;
   console.log(name + " still have " + retirement + " years to retire.")
}

yearsUntilRetirement(2000,"John")