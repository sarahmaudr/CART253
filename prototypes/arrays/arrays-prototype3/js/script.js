/**
 * Title
 * Sarah-Maude Roy
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

let reindeer = [];
const NUM_REINDEER = 5;

/**
 * 
*/
function setup() {
    createCanvas(1000, 600);

    for (let i = 0; i < NUM_REINDEER; i++) {
        reindeer.push({ x: width / 2, y: height / 2 });
    }
}


/**
 * 
*/
function draw() {
    background(15, 25, 55);

    noStroke();
    fill(140, 90, 50);
    ellipse(mouseX, mouseY, 40);

    for (let r of reindeer) {
    ellipse(r.x, r.y, 40);
    }
}