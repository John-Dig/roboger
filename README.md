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
Test: make unlimited number counter into array
Code: robo(150); console.log(originalArray)
Expected Output: (150) [0, 1, 2, ...] 

 .8
Test: outputs 10 values and uses branching
Code: robo(9);
Expected Output: 0, Beep, Boop!, Won't you be my neighbor?, 4, 5,We all have different gifts!, 7, I don't wear sweaters, I'm a robot, 9





#
 .9
Test: outputs 15 values
Code: robo(14);
Expected Output: 0, Beep, Boop!, Won't you be my neighbor?, 4, 5,We all have different gifts!, 7, I don't wear sweaters, I'm a robot, 9, 0, Beep, Boop!, Won't you be my neighbor?, 4

 .91
Test: outputs 100 values
Code: 
Expected Output: 0, Beep, Boop!, Won't you be my neighbor?, 4, 5,We all have different gifts!, 7, I don't wear sweaters, I'm a robot, 9, 0, {...} I'm a robot, 9
  
Test: 
Code: 
Expected Output: 
 
