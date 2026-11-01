/**
 * Title
 * Sarah-Maude Roy
 * 
 * 
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

let flake = {
    x: 500,
    y: 0,
    size: 6,
    speed: 2,
};

/**
 * 
*/
function setup() {
    // creates a 1000x600 canvas
    createCanvas(1000, 600);
}


/**
 * 
*/
function draw() {
    // dark blue background
    background(10, 20, 50);

    flake.y += flake.speed;

    noStroke();
    fill(255);
    ellipse(flake.x, flake.y, flake.size);
}