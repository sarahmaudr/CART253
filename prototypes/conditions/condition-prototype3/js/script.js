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

const moon = {
  x: 500,
  y: 200,
  size: 100,
  fill: "#f7f7f7", // red to start
};

const sun = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#e9d818",
  fills: {
    noOverlap: "#e9d818", // red for no overlap
    overlap: "#0b0b0b" // green for overlap
  }
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

    // the moon
    push();
    noStroke();
    fill(moon.fill);
    ellipse(moon.x, moon.y, moon.size);
    pop();

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