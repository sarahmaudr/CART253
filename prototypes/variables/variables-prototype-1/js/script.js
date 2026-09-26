/**
 * I AM ON FIRE !
 * Sarah-Maude Roy
 * 
 * An artwork that shows a face slowly catching on fire.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

/**
 * create a black canvas
*/
function setup() {
    // create a 1000x600 canvas
    createCanvas(1000, 600);

    // a black background
    background("black");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    drawHead();
    drawFire();
}

function drawHead() {
    push();
    fill("yellow");
    circle(500, 300, 250);
    pop();

    push();
    fill("black");
    circle(460, 275, 50);
    circle(540, 275, 50);
    ellipse(500, 350, 50, 75);
    pop();
}

function drawFire() {
    
}