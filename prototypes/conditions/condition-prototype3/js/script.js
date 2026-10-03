/**
 * The eclipse
 * Sarah-Maude Roy
 * 
 * 
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";


const sun = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#e9d818"
}

/**
 * creates a 1000x600 canvas
*/
function setup() {
    createCanvas(1000, 600);
}


/**
 * 
*/
function draw() {
    // the sky
    background("lightBlue");

    // Move the sun
    sun.x = mouseX;
    sun.y = mouseY;

    // the sun
    push();
    noStroke();
    fill(sun.fill);
    ellipse(sun.x, sun.y, sun.size);
    pop();

    // the mountain
    push();
    noStroke();
    fill("green");
    ellipse(200, 700, 1000, 600);
    pop();

    push();
    noStroke();
    fill("darkGreen");
    ellipse(800, 700, 1000, 500);
    pop();


}