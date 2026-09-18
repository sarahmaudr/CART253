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
    background(0);

//Draw a circle in the centre of the canvas
    push();
    noStroke();
    //draw a circle that changes color based on the mouse position
    fill(mouseX, mouseY, 0);
    // adding variables
    // mouseX and mouseY to make our circle move !
    // Now we change the size of the circle. 
    ellipse(width/2, height/2, 100, 100);
    pop();
}
