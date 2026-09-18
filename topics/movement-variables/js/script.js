/**
 * A bird...
 * Sarah-Maude Roy
 * 
 * Drawing a bird
 * 
 */

"use strict";

//creating object bird
let bird = {
    x: 120,
    y: 480,
    size: 50
}

/**
 * creating a canvas
*/
function setup() {
    createCanvas(640, 480);
}


/**
 * drawing a bird
*/
function draw() {
    background(0);
    
    // Move the bird
    bird.x = bird.x + 1;
    bird.y = bird.y - 2;
    
    // Draw the bird
    ellipse(bird.x, bird.y, bird.size);

}