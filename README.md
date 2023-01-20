Describe: robo()
# .1
Test: framework is set: it outputs to live server console for easier further testing
Code: console.log("test");
Expected Output: "test"
 .2
Test: returns something
Code: robo(1)
Expected Output: 0 
 .3
Test: returns 2 characters
Code: robo(2)
Expected Output: 0, 1 
 .4
Test: returns 1 of the characters changed
Code: robo(2);
Expected Output:  0, "Beep"
 .5
Test: returns test of hard coded array
Code: console.log(beepsArray)
Expected Output: [0, 'Beep', 'Boop!', 'Won't you be my neighbor?', 4, 5,'We all have different gifts!', 7, 'I don't wear sweaters, I'm a robot', 9]
 .6
Test: loops to change input value into outputArray
Code: robo(2);
Expected Output: [0, 'Beep'] 
 .7
Test: changes outputArray to outputString
Code: robo(2)
Expected Output: 0, Beep
 .8
Test: outputs 10 values
Code: robo(9);
Expected Output: 0, Beep, Boop!, Won't you be my neighbor?, 4, 5,We all have different gifts!, 7, I don't wear sweaters, I'm a robot, 9
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
 
