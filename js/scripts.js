//Business Logic
function robo(numb){
  //counting array
  counterArray = [];
  for (i = 0; i < numb; i++) {
    counterArray[i] =  i;
  };
  //roboTemp
  let roboTemp = [0, 'Beep', 'Boop!', "'Won't you be my neighbor?'", 4, 5,"'We all have different gifts!'", 7, "'I don't wear sweaters, I'm a robot ¯\_(ツ)_/¯'", 9];
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

//reset procedure
function resetProcedure(){
  let outputArea = document.getElementById("output-area");
  console.log(outputArea);
  outputArea.innerText = ""
  console.log(document.querySelector("p"));
  document.getElementById("reset-button").setAttribute("class","hidden");
  document.getElementById("input-area").value = ""
  clearInterval(timer);

}
//timing logic
function timingOutput(msT){
  let i = 0;
  const argument = document.getElementById("input-area").value
  const outputArea = document.getElementById("output-area");
  timer = setInterval(() => {
    //if no input 
    if (argument === "") {
      console.log(parseInt(argument));
      outputArea.append("Mr. Roboger needs INPUT, please push reset and give him a number");
      document.getElementById("reset-button").setAttribute("class","visible");
      clearInterval(timer);
    }
    //printing sequence
    let outputArray = robo(argument);
    outputString = outputArray.toString();
    outputArea.append(outputString.charAt(i));
    if (i === 0){
      document.getElementById("reset-button").setAttribute("class","visible");
    }
    i++;
    //stopping sequence
    if (outputString.length === i && argument !== "") {
      console.log(outputString.length);
      clearInterval(timer);
    }
  }, msT);
}  

// UI Logic
window.addEventListener("load", function(e){
  e.preventDefault();
  document.getElementById("button").addEventListener("click", function() {
    timingOutput(18);
    document.getElementById("reset-button").addEventListener("click", function(){
      resetProcedure();
    })
  });
});


