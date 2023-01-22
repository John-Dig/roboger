//Business Logic
let toDL = [];
//let roboTalkFinalSpace
function robo(numb){
  //counting array
  counterArray = [];
  for (i = 0; i < numb; i++) {
    counterArray[i] =  i;
  };
  //roboTemp
  let roboTemp = [0, 'Beep', 'Boop!', "'Won't you be my neighbor?'", 4, 5,"'We all have different gifts!'", 7, "'I don't wear sweaters, I'm a robot'", 9];
  //roboTemp past 9
  if (numb > 9) {
    for (i = 10; i < numb; i ++){
      if (typeof(roboTemp[i-10]) == 'string'){ 
        roboTemp[i] = roboTemp[i % 10];
      }
      else {  
        roboTemp[i] = counterArray[i]
      }
    }
  }
  let roboTalkFinal = [];
  for (i = 0; i < numb; i ++) {
  let rTS = (roboTemp[i]).toString();
  // less than 9
  if (i <= 9) {
    roboTalkFinal[i] = roboTemp[i];    
  }
  // more than 9
  else if (i > 9) {
    if (rTS.includes(1)) {
      roboTalkFinal[i] = roboTemp[1];
    }
    else if (rTS.includes(2)) {
      roboTalkFinal[i] = roboTemp[3]
    }
    else if (rTS.includes(3)) {
      roboTalkFinal[i] = roboTemp[3]
    }
    else if (rTS.includes(6)) {
      roboTalkFinal[i] = roboTemp[6]
    }
    else if (rTS.includes(8)) {
      ;
    }
    else {
      roboTalkFinal[i] = roboTemp[i]
    };
  };
}

return roboTalkFinal;
}  


// UI Logic
window.addEventListener("load", function(e){
  e.preventDefault();
  document.getElementById("button").addEventListener("click", function() {
    let argument = document.getElementById("input-area").value
    let outputArray = robo(argument);
    const outputArea = document.getElementById("output-area");
    const createO = document.createElement("p");
    outputString = outputArray.toString();
    for (i = 0; i < 100; i = setInterval(i++, 5000))
    outputArea.append(outputString.charAt(i));
    setInterval(function() {
      i = i +1;
    }, 500)
  });//outputArea.append = outputArray;
});
    //document.getElementById("output").innerText =robo(argument);


