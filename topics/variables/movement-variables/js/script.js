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
        x: 0,
        // The y is negative because we want the bird to go UP
        y: 0,
    },
    // The minimum velocity for x and y movement. Note that it's NOT ZERO
    // because we use negative x velocity to move left and negative y
    // velocity to move up
    minVelocity: {
      // Assuming that birds move faster horizontally than vertically...
      x: -3,
      y: -2  
    },
    // NEW! Same again with the maximum velocity
    maxVelocity: {
        x: 3,
        y: 2
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

    //Constrain the bird's velocity
    bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x, bird.maxVelocity.x);
    bird.velocity.y = constrain(bird.velocity.y, bird.minVelocity.y, bird.maxVelocity.y);

    // Move the bird by adding its velocity in x and y
    bird.x += bird.velocity.x;
    bird.y = bird.y - bird.velocity.y;
    
    // Draw the bird
    ellipse(bird.x, bird.y, bird.size);

}