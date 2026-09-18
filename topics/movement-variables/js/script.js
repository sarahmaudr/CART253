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
    size: 50,
    // We've added a velocity property to track the bird's velocity
    velocity: {
        // It has x and y properties so we can move the bird in both directions
        x: 1,
        // The y is negative because we want the bird to go UP
        y: -2
    },
    //We now have acceleration properties, these will be ADDED to the
    // velocity every frame
    acceleration: {
        x: 0.025,
        // The y acceleration is negative so the bird will go UP
        y: -0.05
    }
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
    
    // Change the bird's velocity by adding its acceleration to its velocity
    bird.velocity.x = bird.velocity.x + bird.acceleration.x;
    bird.velocity.y = bird.velocity.y + bird.acceleration.y;

    // Move the bird by adding its velocity in x and y
    bird.x = bird.x + bird.velocity.x;
    bird.y = bird.y - bird.velocity.y;
    
    // Draw the bird
    ellipse(bird.x, bird.y, bird.size);

}