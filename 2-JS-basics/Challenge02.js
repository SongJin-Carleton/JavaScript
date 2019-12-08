var Johnscore1 = 89;
var Johnscore2 = 120;
var Johnscore3 = 103;

var MikeScore1 = 116;
var MikeScore2 = 94;
var MikeScore3 = 123;

var MaryScore1 = 97;
var MaryScore2 = 134;
var MaryScore3 = 105;


var JohnAverage = (Johnscore1 + Johnscore2 + Johnscore3)/3
var MikeAverage = (MikeScore1 + MikeScore2 + MikeScore3)/3
var MaryAverage = (MaryScore1 + MaryScore2 + MaryScore3)/3

if((JohnAverage > MikeAverage) && (JohnAverage > MaryAverage)){
  console.log("John is winner, the average score is: " + JohnAverage)
}else if((MikeAverage > JohnAverage) && (MikeAverage > MaryAverage)){
  console.log("Mike is winner, the average score is: " + MikeAverage)
}else if((MaryAverage > JohnAverage) && (MaryAverage > MikeAverage)){
  console.log("Mary is winner, the average score is: " + MaryAverage)
}else{
  console.log("The three teams' score are equal.")
}