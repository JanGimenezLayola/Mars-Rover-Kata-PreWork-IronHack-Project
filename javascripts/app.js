// Rover Object Definition
var rover = {
  direction: 'N',
  x : 0,
  y : 0,
  travelLog : [],
}

//rover 2 definition


// Obstacles Var Definition
var obstacles = {
  x: [0, 1, 2, 2, 4, 6, 7],
  y: [6, 0, 2, 7, 4, 3, 8],
};
  
 /*    Grafic Obstacles Map

     0  1  2  3  4  5  6  7  8  9  
  0 [0, X, 0, 0, 0, 0, 0, 0, 0, 0],
  1 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
  console.log("turnLeft was called!");
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
  console.log("turnRight was called!");
}

// Obstacle Check function
function checkObstacles(){
  for(var j = 0; j < obstacles.x.length; j++){
    //when we want to move to a obstacle position
    if(rover.x === obstacles.x[j] && rover.y === obstacles.y[j]){
      console.log('Obstacle detect, the movement has not been made');
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
function command(letter) {
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
  console.log('Rover has traveled over:' + rover.travelLog);
  console.log('New Rover direction: '+ rover.direction)  }
}
