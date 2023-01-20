//Business Logic

function robo(numb){
  //create original counting array
  originalArray = [];
  for (i = 0; i < numb; i++) {
    originalArray[i] =  i % 10 
    };
  let roboTalk = [0, 'Beep', 'Boop!', "'Won't you be my neighbor?'", 4, 5,'We all have different gifts!', 7, "'I don't wear sweaters, I'm a robot'", 9];
  //transfer roboTalk into OriginalArray creating newArray, adding branching
  let roboTalkComplete = [];
  console.log(typeof(roboTalk[6]));
  for (i = 0; i < numb; i ++) {
    //after 9, must switch individual iteration to string
    if (i > 9 && typeof(roboTalkComplete[6]) == 'string') {
      console.log("HERE");
      roboTalkComplete[i] = roboTalkComplete[i].toString()
      roboTalk[i] =
      console.log(typeof(roboTalkComplete[i]))
      if (roboTalkComplete[i].includes(1)) {
        roboTalkComplete[i] = roboTalk[1];
      }
      else if (roboTalkComplete[i].includes(2)) {
        roboTalkComplete[i] = roboTalk[2]
      }
      else if (roboTalkComplete[i].includes(3)) {
        roboTalkComplete[i] = roboTalk[3]
      }
      else if (roboTalkComplete[i].includes(6)) {
        roboTalkComplete[i] = roboTalk[6]
      }
      else if (roboTalkComplete[i].includes(8)) {
        roboTalkComplete[i] = roboTalk[8]
      }
      //else window.alert("error in nested branch")
    }
    else if (originalArray[i % 10] !== roboTalk[i % 10]) {
      roboTalkComplete[i] = roboTalk[i % 10];
      console.log (i % 10);
    }
    else if (originalArray[i % 10] === roboTalk[i % 10]) {
      roboTalkComplete[i] = originalArray[i % 10];
      
      console.log (i % 10);
    }
    else {
      window.alert("Error in branching")
    };
  };
  roboTalkCompleteS = roboTalkComplete.toString();
  return roboTalkCompleteS;
}
//document.getElementById("outputArea").innerText = wordCensor(document.getElementById("text-passage").value);

robo(20);

// UI Logic
window.addEventListener("load", function(e){
  e.preventDefault();
  document.getElementById("output").innerText = roboTalkCompleteS
});
