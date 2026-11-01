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

let flakes = []
const NUM_FLAKES = 100;

let flake = {
    x: 500,
    y: 0,
    size: 6,
    speed: 2,
};

/**
 * Creates a canvas
*/
function setup() {
    // creates a 1000x600 canvas
    createCanvas(1000, 600);

    for (let i = 0; i < NUM_FLAKES; i++) {
    flakes.push(createFlake());
  }
}

function createFlake() {
    return {
        x: random(0, width),
        y: random(0, height),
        size: random(2, 8),
        speed: random(1, 3),
    };
}

/**
 * 
*/
function draw() {
    // dark blue background
    background(10, 20, 50);

    for (let flake of flakes) {
        flake.y += flake.speed;

    noStroke();
    fill(255);
    ellipse(flake.x, flake.y, flake.size);
    }
}