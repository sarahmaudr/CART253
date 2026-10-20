/**
 * Athanasia Iliopoulos, Razan Elsaygh, Sarah-Maude Roy
 * 
 * 
 * 
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
let ball1 = undefined;
let ball2 = undefined;

// Our paddle
const paddle = {
    x: 0,
    y: 280,
    width: 80,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
    ball1 = createBall(300, 20, 10, 0, 8);
    ball2 = createBall(325, 20, 10, 0, 6);
    
}

function createBall(x, y, size, v, w) {
    const ball = {
        // Position and dimensions
        x: x,
        y: y,
        size: size,
        // How it moves!
        velocity: {
            x: v,
            y: w
        },
    };
    return ball;
}

/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);
    moveBall(ball1);
    moveBall(ball2);

    handleBounce(ball1, paddle);
    handleBounce(ball2, paddle);

    drawPaddle(paddle);
    drawBall(ball1);
    drawBall(ball2);
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
    paddle.x = mouseX
}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
    ball.y += ball.velocity.y;
}


/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {
    if (checkOverlap(ball, paddle)){
        ball.velocity.y = - ball.velocity.y;
    }
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.size);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
    const overlap = (rectA.x + rectA.size/2 > rectB.x - rectB.width/2 &&
          rectA.x - rectA.size/2 < rectB.x + rectB.width/2 &&
          rectA.y + rectA.size/2 > rectB.y - rectB.height/2 &&
          rectA.y - rectA.size/2 < rectB.y + rectB.height/2);
    return overlap;
}