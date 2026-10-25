/**
 * Ghosts!!!
 * Sarah-Maude Roy
 * 
 * 
 * 
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(1000, 600);
}


/**
 * Draws a black background, then draws multiple ghosts 
 * by calling the same funciton with different positions
*/
function draw() {
    // black background
    background(0);

    // calling the function to draw ghosts in different positions
    drawGhost(100, 200);
    drawGhost(400, 200);
    drawGhost(600, 100);
    drawGhost(250, 500);
    drawGhost(900, 200);
    drawGhost(800, 400);
    drawGhost(520, 400);
}

/**
 * Draws one ghosts centered at a certain position (x, y)
 */

function drawGhost(x, y){
    // draws the body of the ghost
    push();
    fill(255);
    ellipse(x, y, 60, 85);
    pop();

    // draws the eyes of the ghost
    push();
    fill(0);
    ellipse(x - 8, y - 5, 8, 15);
    ellipse(x + 8, y - 5, 8, 15);
    pop();
}