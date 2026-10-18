/**
 * Sorting Hat
 * Sarah-Maude Roy
 * 
 * 
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

let lastMoveTime = 0;


/**
 * 
*/
function setup() {
    createCanvas(1200, 600);
}


/**
 * 
*/
function draw() {
    let waitTime = millis() - lastMoveTime;

    background(40, 20, 10);

    textAlign(CENTER, CENTER);
    textSize(64);
    textFont("Papyrus");
    fill(230, 200, 120);

    text("Hmm...", width / 2, height / 2);
}