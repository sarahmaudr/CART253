/**
 * Variables
 * Sarah-Maude Roy
 * 
 * Learning about variables, playing with different settings and drawing circles.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

/**
 * Creates a 640x640 canvas 
*/
function setup() {
// create the canvas
    createCanvas(640, 640);
}


/**
 * Draws circles
*/
function draw() {
//Draw a circle in the centre of the canvas
    push();
    noStroke();
    fill(255, 255, 0);
    // adding variables
    ellipse(width/2, height/2, 100, 100);
    pop();
}
