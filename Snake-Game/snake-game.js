//board
const blockSize = 25;
const rows = 30;
const cols = 30;
let board;
let context;

//snake
let snakeHeadX = blockSize * 3;
let snakeHeadY = blockSize * 3;

let velocityX = 0;
let velocityY = 0;

let snakeBody = [];

//food
let foodX;
let foodY;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;  
    board.width = cols * blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keydown",changeDirection);
    setInterval(update, 1000/10);
}


function changeDirection(e){
    if(e.code == "ArrowUp"){
        velocityX = 0;
        velocityY = -1;
    } else if(e.code == "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
    } else if(e.code == "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;
    } else if(e.code == "ArrowRight"){
        velocityX = 1;
        velocityY = 0;
    }
    

}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeHeadX == foodX && snakeHeadY == foodY){
        snakeBody.push([foodX, foodY]);
        placeFood();
    }
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1] 
    }
    if(snakeBody.length) {
        snakeBody[0] = [snakeHeadX, snakeHeadY];
    }

    context.fillStyle = "lime";
    snakeHeadX += velocityX * blockSize;
    snakeHeadY += velocityY * blockSize;
    context.fillRect(snakeHeadX, snakeHeadY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
         context.fillRect(snakeBody[i][0], snakeBody[i][1],blockSize,blockSize);
        
    }

}

function placeFood(){
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}