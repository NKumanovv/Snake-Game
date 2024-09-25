//board
const blockSize = 25;
const rows = 30;
const cols = 30;
var board;
var context;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;  
    board.width = cols * blockSize;
    context = board.getContext("2d");

    update();
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);
}