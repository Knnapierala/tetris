const grid = document.querySelector('.grid');
let squares = Array.from(document.querySelectorAll('.grid div'));
const ScoreDisplay = document.querySelector('#score');
const StartBtn = document.querySelector('#start-button');
const width = 10;


// The Elements
const lTetromino = [
  [1, width+1, width*2+1, 2],
  [width, width+1, width+2, width*2+2],
  [1, width+1, width*2, width*2+1],
  [width, width*2, width*2+1, width*2+2]
]

const zTertomino =[
  [width*2, width+1, width*2+1,width+2],
  [0, width, width+1, width*2+1],
  [width*2, width+1, width*2+1,width+2],
  [0, width, width+1, width*2+1]
]

const oTetromino = [
  [0,1,width,width+1],
  [0,1,width,width+1],
  [0,1,width,width+1],
  [0,1,width,width+1]
]

const iTetromino =[
  [1,width+1, width*2+1, width*3+1],
  [width, width+1, width+2, width+3],
  [1,width+1, width*2+1, width*3+1],
  [width, width+1, width+2, width+3]
]

const tTetromino =[
  [1, width,width+1,width+2],
  [1, width+1,width+2,width*2+1],
  [width,width+1,width+2,width*2+1],
  [1,width,width+1,width*2+1]
]

const theTetromino = [lTetromino, zTertomino, oTetromino, iTetromino, tTetromino]

let currentPosition = 4;
let currentRotation = 0;


// select random item
let random = Math.floor(Math.random()*theTetromino.length);
let current = theTetromino[random][currentRotation];

//draw the item

function draw () {
  current.forEach( index => {squares[currentPosition + index].classList.add('tetromino')})
}

//undraw the item
function undraw () {
  current.forEach(index => {squares[currentPosition + index].classList.remove('tetromino')})
}
