/**
 * Creepy Flower
 * Sarah-Maude Roy
 * 
 * Creating a flower with a hiden weird face !
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

/**
 * Creating a canvas
*/
function setup() {
    //create a 600x600 canvas
    createCanvas(600, 600);
}


/**
 * drawing the creepy flower
*/
function draw() {
    drawBackground();
    drawStem();
    drawPetals();
    drawHead();
    drawEyes();
    drawMouth();
    drawTeeth();
}

function drawBackground(){
    //draw the background of my masterpiece.
    background(0, 0, 0);
}

function drawStem(){
    // draw stem of the flower
    push();
    fill("green");
    rect(290, 390, 20, 400);
    pop();
}

function drawPetals(){
    // draw petals of the flower
    push();
    noStroke();
    fill("white");
    circle(300, 150, 150);
    circle(195, 225, 150);
    circle(240, 355, 150);
    circle(360, 355, 150);
    circle(400, 225, 150);
    pop();
}

function drawHead() {
    // draw middle of the flower
    push();
    noStroke();
    fill("yellow");
    circle(300, 265, 180);
    pop();
}

function drawEyes(){
    //draw weird eyes
    push();
    colorMode(RGB, 600);
    fill(mouseY, 0, 0);
    ellipse(275, 250, 25, 50);
    ellipse(325, 250, 25, 50);
    pop();

    //draw pupils 
    push();
    fill(0, 0, 0);
    circle(275, 250, 10);
    circle(325, 250, 10);
    pop();
}

function drawMouth(){
    // draw a weird mouth
    push();
    fill(255, 0, 255)
    rect(265, 300, 70, 20);
    pop();
}

function drawTeeth(){
    // draw surprising teeth !
    push();
    noStroke();
    fill(255, mouseY, 255);
    triangle(275, 301, 285, 301, 278, 320);
    triangle(325, 301, 314, 301, 320, 320);
    pop();
}
