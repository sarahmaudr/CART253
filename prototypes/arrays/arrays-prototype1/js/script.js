/**
 * Snow Blizzard
 * Sarah-Maude Roy
 * 
 * A snowy night scene. An array of snowflakes falls down the screen.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

//the array that holds every snowflake 
let flakes = []
// the number of snowflakes there are when the program starts
const NUM_FLAKES = 250;

/**
 * Creates the canvas and fills the flakes array with the starting snowflakes
*/
function setup() {
    // creates a 1000x600 canvas
    createCanvas(1000, 600);

    // makes NUM_FLAKES snowflakes and add each one to the array
    for (let i = 0; i < NUM_FLAKES; i++) {
        flakes.push(createFlake());
    }
}

/**
 * Creates and returns one snowflake. It appears at a
 * random position, but x and y can be given to place it somewhere specific.
 * Bigger flakes fall faster, and each flake gets its own wobble offset so
 * they don't all sway in sync.
 */
function createFlake(x = random(0, width), y = random(0, height)) {
    const size = random(2, 8);
    return {
        x: random(0, width),
        y: random(0, height),
        size: random(2, 8),
        speed: size * 0.3 + random(0.3, 1),
        wobbleOffset: random(0, TWO_PI),
    };
}

/**
 * Draws the night sky, then moves and draws every snowflake in the array
*/
function draw() {
    // dark blue background
    background(10, 20, 50);

    // The mouse position controls the wind: left edge = -3, right edge = 3
    const wind = map(mouseX, 0, width, -3, 3);

    // Go through every flake in the array, one at a time
    for (let flake of flakes) {
        // falls down
        flake.y += flake.speed;
        // get push to the side by the wind
        flake.x += wind * (flake.size / 8);
        // give movement to the snowflake left to right so they don't fall in a straight line
        flake.x += sin(frameCount * 0.03 + flake.wobbleOffset) * 0.5;

        // If the flake falls off the bottom, send it back to the top
        if (flake.y > height + flake.size) {
            flake.y = -flake.size;
            flake.x = random(0, width);
        }

        // If the flake leaves one side, wrap it to the other side
        if (flake.x > width + flake.size) flake.x = -flake.size;
        if (flake.x < -flake.size) flake.x = width + flake.size;

        // Draw the flake as a white circle
        noStroke();
        fill(255);
        ellipse(flake.x, flake.y, flake.size);
        }
}