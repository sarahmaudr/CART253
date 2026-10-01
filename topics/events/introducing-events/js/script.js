/**
 * Introducing events
 * Sarah-Maude Roy
 * 
 * mutiple suns appearing with the user's interraction.
 * 
 */

"use strict";

/**
 * creates a 400x400 canvas
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * nothing here !
*/
function draw() {

}

/**
 * creates suns with the interration of the user (mouse pressed)
 */
function mousePressed() {
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 50);
    pop();
}