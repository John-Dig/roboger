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
  for (i = 0; i < numb; i ++) {
    if (originalArray[i % 10] !== roboTalk[i % 10]) {
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

//robo(15);
robo(15);

// UI Logic
window.addEventListener("load", function(e){
  e.preventDefault();
  document.getElementById("output").innerText = roboTalkCompleteS
});
