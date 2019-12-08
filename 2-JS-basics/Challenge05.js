var JohnTips = {
  
   tips:[124,48,268,180,42],
   calculator:function(){

     var totalTips = []
     var totalPays = [] 

    for(var i = 0; i < this.tips.length; i++){
      if(this.tips[i] <= 50){
        totalTips.push(this.tips[i] * 0.2)
        totalPays.push(this.tips[i] * 0.2 + this.tips[i])
      }else if(this.tips[i] > 50 && this.tips[i] < 200){
        totalTips.push(this.tips[i] * 0.15)
        totalPays.push(this.tips[i] * 0.15 + this.tips[i])    
      }else {
        totalTips.push(this.tips[i] * 0.1)
        totalPays.push(this.tips[i] * 0.1 + this.tips[i])
      }
    }
    this.totalTips = totalTips
    this.totalPays = totalPays

    return totalTips;
   }

}

var MarkTips = {
  
  tips:[77,375,110,45],
  calculator:function(){

    var totalTips = []
    var totalPays = [] 

   for(var i = 0; i < this.tips.length; i++){
     if(this.tips[i] <= 100){
       totalTips.push(this.tips[i] * 0.2)
       totalPays.push(this.tips[i] * 0.2 + this.tips[i])
     }else if(this.tips[i] > 100 && this.tips[i] < 300){
       totalTips.push(this.tips[i] * 0.1)
       totalPays.push(this.tips[i] * 0.1 + this.tips[i])    
     }else {
       totalTips.push(this.tips[i] * 0.25)
       totalPays.push(this.tips[i] * 0.25 + this.tips[i])
     }
   }
   this.totalTips = totalTips
   this.totalPays = totalPays

   return totalTips;
  }

}


console.log("John's")
console.log(JohnTips.calculator())
console.log(JohnTips.totalPays)

console.log("Mark's")
console.log(MarkTips.calculator())
console.log(MarkTips.totalPays)



function average(tips){
  var sum = 0;
  for(var j = 0; j < tips.length; j++){
     sum += tips[j];
  }

  var ave = sum / (tips.length)
  return ave
}
console.log("John's average:") 
var aveJohn = average(JohnTips.calculator())
console.log(aveJohn)

console.log("Mark's average:") 
var aveMark = average(MarkTips.calculator())
console.log(aveMark)



