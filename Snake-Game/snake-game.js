//board
const blockSize = 25;
const rows = 30;
const cols = 30;
let board;
let context;

//snake head
let snakeHeadX = blockSize * 3;
let snakeHeadY = blockSize * 3;

//food
let foodX;
let foodY;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;  
    board.width = cols * blockSize;
    context = board.getContext("2d");

    update();
    placeFood();
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "lime";
    context.fillRect(snakeHeadX, snakeHeadY, blockSize, blockSize);

}

function placeFood(){
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

}