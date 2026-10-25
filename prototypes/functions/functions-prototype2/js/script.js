/**
 * The Pumpkin
 * Sarah-Maude Roy
 * 
 * Creates a pumpkin wallpaper for halloween, using functions and loops.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

/**
 * Creates a 800 x 800 canvas
*/
function setup() {
    createCanvas(800, 800);
}


/**
 * Creates a dark background and calls the function 'drawPumpkin' to draw multiple pumpkins at different positions.
*/
function draw() {
    // black background
    background(0);

    for (let x = 100; x <= 700; x +=200){
    drawPumpkin(x, 0);
    }
 
    for (let x = 0; x <= 800; x +=200){
    drawPumpkin(x, 200);
    }

    for (let x = 100; x <= 700; x +=200){
    drawPumpkin(x, 400);
    }

    for (let x = 0; x <= 800; x +=200){
    drawPumpkin(x, 600);
    }

    for (let x = 100; x <= 700; x +=200){
    drawPumpkin(x, 800);
    }
}

/**
 * Draws a pumpkin with the positions centered at x, y.
 */
function drawPumpkin(x ,y){
    // draws the body of the pumpkin
    push();
    fill(255, 140, 0);
    ellipse(x - 20, y, 50, 60);
    ellipse(x + 20, y, 50, 60);
    ellipse(x, y, 50, 60);
    pop();

    // draws the stem
    push();
    fill("green");
    rect(x - 2, y - 40, 4, 10);
    pop();

    // the face of the pumpkin
    push();
    fill(0);
    triangle(x - 12, y - 4, x - 4, y - 4, x - 8, y - 12);
    triangle(x + 4, y - 4, x + 12, y - 4, x + 8, y - 12);
    ellipse(x, y + 12, 24, 10);
    pop();
}