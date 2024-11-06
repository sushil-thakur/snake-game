const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resstBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackgroundColor = "yellow";
const snakeColor = "green";
const sankeBorder = "black";
const foodColor = "red"; 
const unitSize = 25;
let runnnig = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;

let snake =[
    {x:unitSize *4 , y:0},
    {x:unitSize *3 , y:0},
    {x:unitSize *2 , y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
resstBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){};
function nextTIck(){};
function clearBoard(){};
function createFood(){};
function moveSnake(){};
function drawSnake(){};
function drawFood(){};
function changeDirection(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};