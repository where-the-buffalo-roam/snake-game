
// CONSTANTS

const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = "white";

// Get Canvas Element

var gameCanvas = document.getElementById("gameCanvas");

// Return a two dimensional drawing context.

var ctx = gameCanvas.getContext("2d");

function clearCanvas() {
// Selecting the  color to fill the canvas and background
    ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
    ctx.strokeStyle = CANVAS_BORDER_COLOR;
// Draw a "filled" rectangle to cover the entire canvas
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
// Draw a border around the entire canvas
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}


// Positioning the snake for start

let snake = [
    {x: 250, y:250},
    {x: 240, y: 250},
    {x: 230, y: 250},
    {x: 220, y: 250},
    {x: 210, y: 250},
];

// Horizontal velocity
let dx = 10;
// Vertical velocity
let dy = 0;

// Functions

// Creating and drawing the snake
function drawSnake() {
    snake.forEach(drawSnakePart);
}
function  drawSnakePart(snakePart) {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = "blue";

    ctx.fillRect(snakePart.x, snakePart.y, 10,10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if (keyPressed === LEFT_KEY && !goingRight){
        dx = -10;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown){
        dx = 0;
        dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }
}
//creating a function to advance the snake
function advanceSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();
}
// Creating function to move the snake forward smoothly. {
    function main(){
    setTimeout(function onTick() {
        clearCanvas();
        advanceSnake();
        drawSnake();
        main();
    }, 100);
    }
main();
document.addEventListener("keydown", changeDirection)