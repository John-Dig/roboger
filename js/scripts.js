//Business Logic

function robo(numb){
  //create original counting array
  counterArray = [];
  for (i = 0; i < numb; i++) {
    counterArray[i] =  i;
    };
  let roboTemp = [0, 'Beep', 'Boop!', "'Won't you be my neighbor?'", 4, 5,'We all have different gifts!', 7, "'I don't wear sweaters, I'm a robot'", 9];
  //transfer roboTemp into OriginalArray creating newArray, adding branching
  let roboTalkFinal = [];
    for (i = 0; i < numb; i ++) {
    //after 9, must switch individual iteration to string
    console.log(counterArray[i]);
    if (i > 9 && toString(counterArray[i]).includes(1)) {
      console.log("HERE");
      roboTalkFinal[i] = roboTalkFinal[i].toString()
      roboTemp[i] =
      console.log(typeof(roboTalkFinal[i]))
      if (roboTalkFinal[i].includes(1)) {
        roboTalkFinal[i] = roboTemp[1];
      }
      else if (roboTalkFinal[i].includes(2)) {
        roboTalkFinal[i] = roboTemp[2]
      }
      else if (roboTalkFinal[i].includes(3)) {
        roboTalkFinal[i] = roboTemp[3]
      }
      else if (roboTalkFinal[i].includes(6)) {
        roboTalkFinal[i] = roboTemp[6]
      }
      else if (roboTalkFinal[i].includes(8)) {
        roboTalkFinal[i] = roboTemp[8]
      }
      //else window.alert("error in nested branch")
    }
    else if (counterArray[i % 10] !== roboTemp[i % 10]) {
      roboTalkFinal[i] = roboTemp[i % 10];
      console.log (i % 10);
    }
    else if (counterArray[i % 10] === roboTemp[i % 10]) {
      roboTalkFinal[i] = counterArray[i % 10];
      
      console.log (i % 10);
    }
    else {
      window.alert("Error in branching")
    };
  };
  roboTalkCompleteS = roboTalkFinal.toString();
  return roboTalkCompleteS;
}
//document.getElementById("outputArea").innerText = wordCensor(document.getElementById("text-passage").value);

robo(20);

// UI Logic
window.addEventListener("load", function(e){
  e.preventDefault();
  document.getElementById("output").innerText = roboTalkCompleteS
});
