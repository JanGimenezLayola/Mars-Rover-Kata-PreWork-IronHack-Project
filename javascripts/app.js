console.log('Welcome to the Mars Rover Kata');
console.log('You have Rover-1 in position:(0,0) and looking to the North (up to the page)');
console.log('You have Rover-2 in position:(01,1) and looking to the North (up to the page)');
console.log('You can move the Rovers in your Map (10x10), but you have obstacles in (0, 6), (1, 0), (2, 2), (2, 7), (4, 4), (6, 3), (7, 8)');
console.log("If you try to hit an obstacle or another Rover the program will warn you and also won't make the movement");
console.log('Feel free to try the Rovers, Good Luck');
console.log('Mars Rover Kata created by Jan Gimenez Layola in June 2019 --- IronHack PreWork')


// Rover Object Definition
const rover = {
  direction: 'N',
  x : 0,
  y : 0,
  travelLog : [],
}


// Obstacles Var Definition
const obstacles = {
  x: [0, 1, 2, 2, 4, 6, 7],
  y: [6, 0, 2, 7, 4, 3, 8],
};
  
 /*    Initial Grafic  Map

     0  1  2  3  4  5  6  7  8  9  
  0 [1, X, 0, 0, 0, 0, 0, 0, 0, 0],
  1 [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  2 [0, 0, X, 0, 0, 0, 0, 0, 0, 0],
  3 [0, 0, 0, 0, 0, 0, X, 0, 0, 0],
  4 [0, 0, 0, 0, X, 0, 0, 0, 0, 0],
  5 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  6 [X, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  7 [0, 0, X, 0, 0, 0, 0, 0, 0, 0],
  8 [0, 0, 0, 0, 0, 0, 0, X, 0, 0],
  9 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

*/


// Turning the rover
function turnLeft() {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W': 
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
  console.log("Rover-1 turnLeft");
}

function turnRight() {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E': 
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log("Rover-1 turnRight");
}

// Obstacle Check function
function checkObstacles(){
  for(var j = 0; j < obstacles.x.length; j++){
    //when we want to move to a obstacle position
    if(rover.x === obstacles.x[j] && rover.y === obstacles.y[j]){
      console.log('Obstacle detect, the movement has not been made');
      return true;
    } else if (rover.x === rover2.x && rover.y === rover2.y) {
      console.log('crash with Rover-2 avoided');
      return true;
    }
  } return false;
}

//Moving Rover
function moveForward() {
  console.log("moveForward was called")

if(rover.direction === 'N' && rover.y > 0 ){
    rover.y = rover.y - 1; // Reduce y = climb a row
    if(checkObstacles()) rover.y = rover.y + 1;
  } else if(rover.direction === 'S' && rover.y < 10 ) {
    rover.y = rover.y + 1; // Increase y = descend a row
    if(checkObstacles()) rover.y = rover.y - 1;
  } else if(rover.direction === 'W' && rover.x > 0) {
    rover.x = rover.x - 1; //Reduce x = go left
    if(checkObstacles()) rover.x = rover.x + 1;
  } else if(rover.direction === 'E' && rover.x < 10 ) {
    rover.x = rover.x + 1; //Increase x = go right
    if(checkObstacles()) rover.x = rover.x - 1;
  } else {
    console.log('map limit error (10x10)')
  } rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");
}

//Backwards function
function moveBackward() {
  console.log("moveBackward was called")

if(rover.direction === 'N' && rover.y < 10 ){
    rover.y = rover.y + 1; // Reduce y = climb a row
    if(checkObstacles()) rover.y = rover.y - 1;
  } else if(rover.direction === 'S' && rover.y > 0 ) {
    rover.y = rover.y - 1; // Increase y = descend a row
    if(checkObstacles()) rover.y = rover.y + 1;
  } else if(rover.direction === 'W' && rover.x < 10) {
    rover.x = rover.x + 1; //Reduce x = go left
    if(checkObstacles()) rover.x = rover.x - 1;
  } else if(rover.direction === 'E' && rover.x > 0 ) {
    rover.x = rover.x - 1; //Increase x = go right
    if(checkObstacles()) rover.x = rover.x + 1;
  } else {
    console.log('map limit error (10x10)')
  } rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");
}

//Valid commands
function commandRover1(letter) {
  for(i = 0; i < letter.length; i++){
  switch (letter[i]) {
    case 'l': //call turnLeft function
      turnLeft();
      break;
    case 'r': //call turnRight function
      turnRight();
      break;
    case 'f': //call moveForward function
      moveForward();
      break;
    case 'b': //call moveBackward function
    moveBackward();
      break;
    default:
      console.log('invalid command')
  } 
  console.log('Rover-1 has traveled over:' + rover.travelLog);
  console.log('New Rover-1 direction: '+ rover.direction)
  console.log('New Rover-1 position: ' + '(' + rover.x + ' , ' + rover.y + ')' )  }
}


// Mars Rover 2
const rover2 = {
  direction: 'N',
  x : 1,
  y : 1,
  travelLog : [],
}

// Turning the rover
function turnLeftRover2() {
  switch (rover2.direction) {
    case 'N':
      rover2.direction = 'W';
      break;
    case 'W': 
      rover2.direction = 'S';
      break;
    case 'S':
      rover2.direction = 'E';
      break;
    case 'E':
      rover2.direction = 'N';
      break;
  }
  console.log("Rover-2 turnLeft!");
}

function turnRightRover2() {
  switch (rover2.direction) {
    case 'N':
      rover2.direction = 'E';
      break;
    case 'E': 
      rover2.direction = 'S';
      break;
    case 'S':
      rover2.direction = 'W';
      break;
    case 'W':
      rover2.direction = 'N';
      break;
  }
  console.log("Rover-2 turnRight");
}

// Obstacle Check function
function checkObstaclesRover2(){
  for(var j = 0; j < obstacles.x.length; j++){
    //when we want to move to a obstacle position
    if(rover2.x === obstacles.x[j] && rover2.y === obstacles.y[j]){
      console.log('Obstacle detect, the movement has not been made');
      return true;
    } else if (rover2.x === rover.x && rover2.y === rover.y) {
      console.log('crash with Rover-1 avoided');
      return true;
    }
  } return false;
}

//Moving Rover
function moveForwardRover2() {
  console.log("Rover-2 moveForward")

if(rover2.direction === 'N' && rover2.y > 0 ){
    rover2.y = rover2.y - 1; // Reduce y = climb a row
    if(checkObstaclesRover2()) rover2.y = rover2.y + 1;
  } else if(rover2.direction === 'S' && rover2.y < 10 ) {
    rover2.y = rover2.y + 1; // Increase y = descend a row
    if(checkObstaclesRover2()) rover2.y = rover2.y - 1;
  } else if(rover2.direction === 'W' && rover2.x > 0) {
    rover2.x = rover2.x - 1; //Reduce x = go left
    if(checkObstaclesRover2()) rover2.x = rover2.x + 1;
  } else if(rover2.direction === 'E' && rover2.x < 10 ) {
    rover2.x = rover2.x + 1; //Increase x = go right
    if(checkObstaclesRover2()) rover2.x = rover2.x - 1;
  } else {
    console.log('map limit error (10x10)')
  } rover2.travelLog.push("(" + rover2.x + ", " + rover2.y + ")");
}

//Backwards function
function moveBackwardRover2() {
  console.log("Rover-2 moveBackward")

if(rover2.direction === 'N' && rover2.y < 10 ){
    rover2.y = rover2.y + 1; // Reduce y = climb a row
    if(checkObstaclesRover2()) rover2.y = rover2.y - 1;
  } else if(rover2.direction === 'S' && rover2.y > 0 ) {
    rover2.y = rover2.y - 1; // Increase y = descend a row
    if(checkObstaclesRover2()) rover2.y = rover2.y + 1;
  } else if(rover2.direction === 'W' && rover2.x < 10) {
    rover2.x = rover2.x + 1; //Reduce x = go left
    if(checkObstaclesRover2()) rover2.x = rover2.x - 1;
  } else if(rover2.direction === 'E' && rover2.x > 0 ) {
    rover2.x = rover2.x - 1; //Increase x = go right
    if(checkObstaclesRover2()) rover2.x = rover2.x + 1;
  } else {
    console.log('map limit error (10x10)')
  } rover2.travelLog.push("(" + rover2.x + ", " + rover2.y + ")");
}

//Valid commands
function commandRover2(letter) {
  for(i = 0; i < letter.length; i++){
  switch (letter[i]) {
    case 'l': //call turnLeft function
      turnLeftRover2();
      break;
    case 'r': //call turnRight function
      turnRightRover2();
      break;
    case 'f': //call moveForward function
      moveForwardRover2();
      break;
    case 'b': //call moveBackward function
    moveBackwardRover2();
      break;
    default:
      console.log('invalid command')
  } 
  console.log('Rover-2 has traveled over:' + rover2.travelLog);
  console.log('New Rover-2 direction: '+ rover2.direction);
  console.log('New Rover-2 position: ' + '(' + rover2.x + ' , ' + rover2.y + ')' ) }
}
