var Bills = [124,48,268];

function tip(Bill){
 
  var tip;
  switch(true){
    case Bill <= 50:
      tip = Bill * (20/100)
      break;
    case Bill > 50 && Bill < 200:
      tip = Bill * (15/100) 
      break;
    case Bill >= 200:
      tip = Bill * (10/100)
      break;
    default:
      console.log("The wrong number!");
  }
  return tip;
}

function finalPaid(Bills){
  var len = Bills.length

  var tips = [];
  var finalPaids = [];

  tips.push(tip(Bills[0]))
  finalPaids.push(tip(Bills[0]) + Bills[0])
  tips.push(tip(Bills[1]))
  finalPaids.push(tip(Bills[1]) + Bills[1])
  tips.push(tip(Bills[2]))
  finalPaids.push(tip(Bills[2]) + Bills[2])
  
  
  console.log("Tips is: " + tips);
  console.log("FinalPaid is: " + finalPaids)
}

finalPaid(Bills)