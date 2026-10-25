/**
 * Title of Project
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

    drawPumpkin();
}

function drawPumpkin(){
    push();
    fill(255, 140, 0);
    ellipse(300, 400, 250, 300);
    ellipse(500, 400, 250, 300);
    ellipse(400, 400, 250, 300);
    pop();

    push();
    fill("green");
    rect(395, 200, 10, 50);
    pop();
}