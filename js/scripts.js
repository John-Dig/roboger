//Business Logic

function robo(numb){
  //counting array
  counterArray = [];
  for (i = 0; i < numb; i++) {
    counterArray[i] =  i;
  };
  //roboTemp
  let roboTemp = [0, 'Beep', 'Boop!', "'Won't you be my neighbor?'", 4, 5,'We all have different gifts!', 7, "'I don't wear sweaters, I'm a robot'", 9];
  //roboTemp past 9 works
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
  //transfer roboTemp into OriginalArray creating newArray, adding branching
  let a = roboTemp[10].toString();
  let aS = a.toString();
  console.log(a);
  console.log(roboTemp[10]);
  console.log(toString(roboTemp[9]).includes(''));
  //console.log(counterArray[12].toString());
  
  let roboTalkFinal = [];
  for (i = 0; i < numb; i ++) {
    if (i <= 9) {
      roboTalkFinal[i] = roboTemp[i];    
    }
    else if (i > 9)  {
      let a1 = roboTemp[1];
      let a2 = roboTemp[2];
      let a3 = roboTemp[3];
      let a6 = roboTemp[6];
      let a8 = roboTemp[8];
      console.log(a1, a2, a3, a6, a8);

      if (roboTemp[i] == 'number') {

          roboTalkFinal[i] = a1
          console.log("here");
        }
        else if (toString(counterArray[i]).includes(3)) {
          roboTalkFinal[i] = roboTemp[3]
        }
        else if (toString(counterArray[i]).includes(6)) {
          roboTalkFinal[i] = roboTemp[6]
        }
        else if (toString(counterArray[i]).includes(8)) {
          roboTalkFinal[i] = roboTemp[8]
        }
        else {
          console.log("Elsed out")
        }
    };
  }
    // else if (counterArray[i % 10] !== roboTemp[i % 10]) {
      //   roboTalkFinal[i] = roboTemp[i % 10];
      //   console.log("here");
      // }
      // else if (counterArray[i % 10] === roboTemp[i % 10]) {
        //   roboTalkFinal[i] = counterArray[i % 10];
        //   console.log(" or here here");
        // }
        roboTalkCompleteS = roboTalkFinal.toString();
        
      };
//document.getElementById("outputArea").innerText = wordCensor(document.getElementById("text-passage").value);

robo(20);

// UI Logic
window.addEventListener("load", function(e){
  e.preventDefault();
  document.getElementById("output").innerText = roboTalkCompleteS
});
