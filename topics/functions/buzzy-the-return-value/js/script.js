/**
 * Buzzy the return value
 * Pippin Barr
 * 
 * Two flies that buzz around on the canvas
 */

"use strict";

let buzzyTheFly = undefined;
let jazzyTheFly = undefined;


/**
 * Create a canvas and setup our flies
 */
function setup() {
    createCanvas(400, 400);
    
    buzzyTheFly = createFly(2);
    jazzyTheFly = createFly(10);
}

/**
 * Creates a fly object with randomized position, default size, 
 * and provided buzziness
 */
function createFly(buzziness) {
    const fly = {
        x: random(0, width),
        y: random(0, height),
        size: 30,
        buzziness: buzziness
    };
    return fly;
}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");

    moveFly(buzzyTheFly);
    moveFly(jazzyTheFly);

    drawFly(buzzyTheFly);
    drawFly(jazzyTheFly);
}

/**
 * Move the fly passed in by updating its position
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draw the fly passed in using its properties
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}