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
 

1.0
1.01 functions with return
1.1 add timeout

# 1.2 add reset button

options for future:
faster/ slower text



-still need
readme complete