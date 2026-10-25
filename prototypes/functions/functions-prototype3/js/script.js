/**
 * Title of Project
 * Sarah-Maude Roy
 * 
 * 
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

let message = "Boo!";

/**
 * 
*/
function setup() {
    createCanvas(500, 800);
}


/**
 * 
*/
function draw() {
    background(0);

    background(0);
    fill(255, 140, 0);
    textAlign(CENTER, CENTER);
    textSize(64);
    text(message, width / 2, height / 2);
}