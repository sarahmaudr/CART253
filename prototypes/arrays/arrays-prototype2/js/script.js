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

let present = {
    x: 300,
    y: 350,
    size: 160,
};

/**
 * 
*/
function setup() {
    createCanvas(1000, 600);
}


/**
 * 
*/
function draw() {
    background(20, 60, 40);

    rectMode(CENTER);
    noStroke();

    // Box
    fill(200, 30, 40);
    rect(present.x, present.y, present.size, present.size);

    // Ribbon (one vertical strip, one horizontal strip)
    fill(240, 190, 40);
    rect(present.x, present.y, 24, present.size);
    rect(present.x, present.y, present.size, 24);
}