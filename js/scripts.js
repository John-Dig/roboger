//Business Logic

function robo(numb){
  //create original array, inefficient for 10 digits but doing this way to demonstrate looping and for further expansion to 100+ characters.
  originalArray = [];
  for (i = 0; i < 10; i++) {
    originalArray[i] = i
    };
  let roboTalk = [0, 'Beep', 'Boop!', "'Won't you be my neighbor?'", 4, 5,'We all have different gifts!', 7, "'I don't wear sweaters, I'm a robot'", 9];
  //transfer roboTalk into OriginalArray creating newArray, not branching yet
  let roboTalkComplete = [];
  for (i = 0; i < roboTalk.length; i ++) {
    roboTalkComplete[i] = roboTalk[i];
  };
  roboTalkCompleteS = roboTalkComplete.toString();
  return roboTalkCompleteS;
}

//robo(1);
console.log(robo(9));