/**
 * Creepy Flower
 * Sarah-Maude Roy
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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
}

function drawBackground(){
    background(0);
}

function drawStem(){
    push();
    fill("green");
    rect(290, 390, 20, 400);
}

function drawPetals(){
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