/**
 * The Pumpkin
 * Sarah-Maude Roy
 * 
 * 
 */

"use strict";

/**
 * 
*/
function setup() {
    createCanvas(800, 800);
}


/**
 * 
*/
function draw() {
    background(0);

    drawPumpkin(400, 400);
}

function drawPumpkin(x ,y){
    // draws the body of the pumpkin
    push();
    fill(255, 140, 0);
    ellipse(x - 100, y, 250, 300);
    ellipse(x + 100, y, 250, 300);
    ellipse(x, y, 250, 300);
    pop();

    // draws the stem
    push();
    fill("green");
    rect(x - 5, y - 200, 10, 50);
    pop();

    // the face of the pumpkin
    push();
    fill(0);
    triangle(340, 380, 380, 380, 360, 340);
    triangle(420, 380, 460, 380, 440, 340);
    ellipse(x, y + 60, 120, 50);
    pop();
}