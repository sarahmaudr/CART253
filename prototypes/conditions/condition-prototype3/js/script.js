/**
 * The eclipse
 * Sarah-Maude Roy
 * 
 * An interactive prototype that imitats an eclipse. When the sun, controlled by the user's mouse, 
 * is infront of the moon, an eclipse occur, changing the colors of the artwork.
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
  size: 85,
  fill: "#e9d818",
  fills: {
    noOverlap: "#e9d818",
    overlap: "#0b0b0b" 
  }
};

const mountain1 = {
  x: 200, 
  y: 700, 
  fill: "green",
  fills: {
    noOverlap: "green",
    overlap: "#2a236e" 
  }
};

const mountain2 = {
  x: 800,
  y: 700,
  size: 85,
  fill: "darkGreen",
  fills: {
    noOverlap: "darkGreen", 
    overlap: "#051a69" 
  }
};

let skyFill = "lightBlue";

/**
 * creates a 1000x600 canvas
*/
function setup() {
    createCanvas(1000, 600);
}


/**
 * creates an eclipse. The sun controlled by the mouse, when placed infront of the moon, changes color and the whole artwork darkens.
*/
function draw() {
    // Move the sun
    sun.x = mouseX;
    sun.y = mouseY;

    const d = dist(sun.x, sun.y, moon.x, moon.y);
    const overlap = (d < sun.size/2 + moon.size/2);
  
    // first condition: if sun and moon overlap, the eclipse occurs (changing colors)
    if (overlap) {
        sun.fill = sun.fills.overlap;
        skyFill = "#100427";
        mountain1.fill = mountain1.fills.overlap;
        mountain2.fill = mountain2.fills.overlap;
    }
    // second condition: if the sun doesn't overlap, the colors do not change.
    else {
        sun.fill = sun.fills.noOverlap;
        skyFill = "lightBlue";
        mountain1.fill = mountain1.fills.noOverlap;
        mountain2.fill = mountain2.fills.noOverlap;
    }

    // the blue sky
    background(skyFill);

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

    // the first mountain
    push();
    noStroke();
    fill(mountain1.fill);
    ellipse(mountain1.x, mountain1.y, 1000, 600);
    pop();

    // the second mountain
    push();
    noStroke();
    fill(mountain2.fill);
    ellipse(mountain2.x, mountain1.y, 1000, 500);
    pop();
}