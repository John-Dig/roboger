## Mr. Roboger's Neighborhood

### by John Diggins
#### Just a fun project

### Technologies Used
- Javascript
- HTML
- CSS
- Google search engine

### Description
 The program simply outputs a number of phrases corresponding to the number entered.  Some of the phrases displayed are simply the number of the phrase, but this changes as numbers get higher.  When certain single digits are detected in the phrase number, they become a different phrase.  It looks somewhat random, but it's not.  Perhaps you can figure out what the patter is?

### Background
 The _Mr. Roboger_ character is based on Fred Roger's character in the children's television show: _Mr. Rogers Neighborhood_, which aired from 1968-2001. The real Mr. Rogers had passed on.  Mr. Roboger attempts to bring back his spirit, however, he does a terrible job at it.  He's only a robot, and a very simple robot at that. This is just a first try by a beginning programmerat bringing back his spirit. 

 ### Setup/ Installation Requirements
 - Clone this repository to your desktop.
 - Navigate to the top level of the directory: roboger.
 - Open index.html in your browser.

### Known Bugs
- if you click before Mr. Roboger finishes his phrases, you may push him to be unpredictable (this could also be seen as a feature).  You wouldn't interrupt the real Mr. Rogers before he finished speaking would you?


## Test Driven Development

Describe: robo()
 .1
Test: framework is set: it outputs to live server console for easier further testing
Code: console.log("test");
Expected Output: "test"

 .11
Test: returns input
Code: robo(5);
Expected Output: 5

.201
Test: returns first character
Code: robo(1);
Expected Output: 0

 .3
Test: returns 2 characters
Code: robo(2);
Expected Output: 0, 1 

 .401
Test: returns 1 of the characters changed
Code: robo(2);
Expected Output:  0, "Beep"
Actual Output: 0 Beep //ok

 .501
Test: returns test of hard coded array
Code: console.log(beepsArray)
Expected Output: [0, 'Beep', 'Boop!', 'Won't you be my neighbor?', 4, 5,'We all have different gifts!', 7, 'I don't wear sweaters, I'm a robot', 9]
Actual Output: 0,Beep,Boop!,'Won't you be my neighbor?',4,5,We all have different gifts!,7,'I don't wear sweaters, I'm a robot',9 //ok

  .511
Test: returns new array: originalArray
Code: console.log(originalArray)
Expected Output: ([0, 1, 2, {...}, 9])

 .602
Test: loops to change originalArray value into outputArray
Code: robo(9);
Expected Output: 0,'Beep','Boop!',"'Won't you be my neighbor?'",4,5,'We all have different gifts!',7,"'I don't wear sweaters, I'm a robot'",9 

 .71
Test: make repeating number counter into array
Code: robo(150); console.log(originalArray)
Expected Output: (150) [0, 1, 2, ...] 

#
 .802
Test: outputs 15 values and uses branching. Must output to HTML due to limitations of console
Code: robo(14);
Expected Output: 0,Beep,Boop!,'Won't you be my neighbor?',4,5,We all have different gifts!,7,'I don't wear sweaters, I'm a robot',9,0,Beep,Boop!,'Won't you be my neighbor?',4

 .901
Test: outputs 150 values
Code: robo(149);
Expected Output: 0,Beep,Boop!,Won't you be my neighbor?,4,5,We all have different gifts!, 7,I don't wear sweaters,I'm a robot,9,0, Beep,Boop!,Won't you be my neighbor?,4 {...}
-robo temp has to repeat numb times
-need to determine functional logic to branch off

-roboTemp array has to use branching
-roboTemp has to have 2 digit numbers

 .95
Test: now outputs contingent on index number CONTAINING specific digit.
Test: robo(20)
Code: robo(20);
Expected Output: {...}, 9, beep, beep, Boop!,'Won't you be my neighbor?',beep,beep,We all have different gifts!,beep,I don't wear sweaters, I'm a robot,beep,boop! 


UI extras
1.0: fully functional.
1.1: added delayed output.
1.2: added reset button.
Future possibilities
1.3: add speed input.

###### License

##### Epicodus
>Copyright (c) 2023 John Diggins
