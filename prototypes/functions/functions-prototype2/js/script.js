/**
 * The Pumpkin
 * Sarah-Maude Roy
 * 
 * Creates a 
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

    drawPumpkin(100, 0);
    drawPumpkin(300, 0);
    drawPumpkin(500, 0);
    drawPumpkin(700, 0);

    drawPumpkin(0, 200);
    drawPumpkin(200, 200);
    drawPumpkin(400, 200);
    drawPumpkin(600, 200);
    drawPumpkin(800, 200);

    drawPumpkin(100, 400);
    drawPumpkin(300, 400);
    drawPumpkin(500, 400);
    drawPumpkin(700, 400);

    drawPumpkin(0, 600);
    drawPumpkin(200, 600);
    drawPumpkin(400, 600);
    drawPumpkin(600, 600);
    drawPumpkin(800, 600);

    drawPumpkin(100, 800);
    drawPumpkin(300, 800);
    drawPumpkin(500, 800);
    drawPumpkin(700, 800);
}

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