/**
 * Mirrors
 * Sarah-Maude Roy
 * 
 * This program draws multiple triangles that change color with the movement of the mouse of the user
 * (similar to the reflexion of mirrors).
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

/**
 * creating a 800x800 canvas
*/
function setup() {
    // creates the canvas
    createCanvas(400,400);
}


/**
 * drawing mirrors
*/
function draw() {
    drawMirrors();
}

function drawMirrors() {
    background(0);
    push();
    noStroke();
    fill(mouseX, mouseY, 0);
    triangle(-50, 50, 30, -50, 200, 200);
    pop();

    push();
    noStroke();
    fill(mouseX, mouseY, 255);
    triangle(-50, 50, 0, 200, 200, 200);
    pop();

    push();
    noStroke();
    fill(255, mouseY, mouseX);
    triangle(0, 200, 0, 400, 200, 200);
    pop();

    push();
    noStroke();
    fill(mouseX, 255, mouseY);
    triangle(0, 400, 200, 400, 200, 200);
    pop();

    push();
    noStroke();
    fill(mouseY, 255, mouseX);
    triangle(200, 400, 400, 400, 200, 200);
    pop();

    push();
    noStroke();
    fill(0, mouseX, mouseX);
    triangle(400, 400, 400, 200, 200, 200);
    pop();

    push();
    noStroke();
    fill(255, mouseX, mouseY);
    triangle(400, 200, 400, 0, 200, 200);
    pop();

    push();
    noStroke();
    fill(mouseY, 0, mouseY);
    triangle(400, 0, 250, 0, 200, 200);
    pop();

    push();
    noStroke();
    fill(0, mouseX, mouseY);
    triangle(250, 0, 30, 0, 200, 200);
    pop();
}