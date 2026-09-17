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
 * creating a canvas
*/
function setup() {
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

function drawBackground(){
// drawing the background a solid color
    background("green");
}

function drawWings(){
// drawing the wings for the dragonfly
    push();
    fill("lightGrey");
    ellipse(300, 350, 200, 75);
    ellipse(500, 350, 200, 75);
    ellipse(250, 300, 300, 75);
    ellipse(550, 300, 300, 75);
    pop();
}

function drawingHead(){
// drawing the head for of the dragonfly
    push();
    fill("black");
    circle(400, 280, 45);
    pop();
}

function drawBody(){
// drawing the body of the dragonfly
    push();
    fill("black");
    ellipse(400, 380, 30, 200);
    pop();
}
