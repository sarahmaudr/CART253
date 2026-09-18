/**
 * Creating variables
 * Sarah-Maude Roy
 * 
 * 
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

// declare variable 'holeSize' so that we can use it later in our code
let holeSize = 180;

/**
 * Creates a 480x480 canvas
*/
function setup() {
// Create the canvas
    createCanvas(480, 480);
}


/**
 * Draws cheese
*/
function draw() {
    // Cheese color (yellow)
    background(255, 255, 0);
    
    // Draw a hole in the upper left
    push();
    noStroke();
    fill(0);
    // Drawing a circle (works the same as circle())
    ellipse(140, 175, holeSize);
    pop();
}