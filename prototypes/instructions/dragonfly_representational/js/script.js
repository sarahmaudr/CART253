/**
 * Dragonfly
 * Sarah-Maude Roy
 * 
 * Drawing a dragonfly
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
    // the canvas
    createCanvas(800,800);
}


/**
 * creating the drawing
*/
function draw() {
    drawBackground();
    drawWings();
    drawingHead();
    drawBody();
}

/**
 * drawing the background a solid color
*/
function drawBackground(){
// the background
    background("green");
}

/**
 * drawing the wings for the dragonfly
*/
function drawWings(){
// the wings
    push();
    fill("lightGrey");
    ellipse(300, 350, 200, 75);
    ellipse(500, 350, 200, 75);
    ellipse(250, 300, 300, 75);
    ellipse(550, 300, 300, 75);
    pop();
}

/**
 * drawing the head for of the dragonfly
*/
function drawingHead(){
// the head
    push();
    fill("black");
    circle(400, 280, 45);
    pop();
}

/**
 * drawing the body of the dragonfly
*/
function drawBody(){
// the body 
    push();
    fill("black");
    ellipse(400, 380, 30, 200);
    pop();
}
