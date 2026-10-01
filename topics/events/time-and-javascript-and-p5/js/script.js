/**
 * Time and JavaScript and p5
 * Sarah-Maude Roy
 * 
 *A ghost passing by.
 */

"use strict";

const ball = {
    x: 0,
    y: 200,
    size: 50
};

/**
 * creates a 400x400 canvas
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * Creates a black spooky background and a white ghost passing by.
*/
function draw() {
    //black background
    background(0);
    
    // the ghost moving
    ball.x += 1;
    
    // the white ghost
    push();
    noStroke();
    ellipse(ball.x, ball.y, ball.size);
    pop();
}