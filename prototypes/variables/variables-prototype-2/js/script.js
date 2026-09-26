/**
 * Nightmare
 * Sarah-Maude Roy
 * 
 * An artwork on nightmares, where creatures appear in your dreams. Be careful !
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

/**
 * Draws a base canvas with a black background
*/
function setup() {
    // a 1000x600 canvas
    createCanvas(1000, 600);
    // the black background
    background("black");
}

/**
 * draws faces you can only see in your nightmares
*/
function draw() {
    drawEyes();
    drawTeeth();
}

/**
 * draws eyes of our creatures that appears from the dark
 */
function drawEyes() {
    // the eyes
    push();
    colorMode(RGB, 1000);
    fill(mouseX, 0, 0);

    ellipse(200, 200, 25, 50);
    ellipse(250, 200, 25, 50);

    ellipse(375, 300, 35, 60);
    ellipse(425, 300, 35, 60);

    ellipse(600, 350, 25, 50);
    ellipse(650, 350, 25, 50);

    ellipse(850, 150, 25, 50);
    ellipse(900, 150, 25, 50);

    ellipse(100, 500, 25, 50);
    ellipse(150, 500, 25, 50);
    pop();

    // the pupils 
    push();
    fill(0, 0, 0);
    circle(200, 200, 10);
    circle(250, 200, 10);

    circle(375, 300, 10);
    circle(425, 300, 10);

    circle(600, 350, 10);
    circle(650, 350, 10);

    circle(850, 150, 10);
    circle(900, 150, 10);

    circle(100, 500, 10);
    circle(150, 500, 10);
    pop();
}

/**
 * draws teeth that appears with the eyes of our creatures.
 */
function drawTeeth() {
    // the teeth
    push();
    colorMode(RGB, 1000);
    noStroke();
    fill(mouseX, mouseX, mouseX);

    triangle(190, 235, 200, 235, 195, 275);
    triangle(210, 235, 220, 235, 215, 275);
    triangle(230, 235, 240, 235, 235, 275);
    triangle(250, 235, 260, 235, 255, 275);

    triangle(365, 340, 375, 340, 370, 375);
    triangle(385, 340, 395, 340, 390, 375);
    triangle(405, 340, 415, 340, 410, 375);
    triangle(425, 340, 435, 340, 430, 375);

    triangle(590, 385, 600, 385, 595, 425);
    triangle(610, 385, 620, 385, 615, 425);
    triangle(630, 385, 640, 385, 635, 425);
    triangle(650, 385, 660, 385, 655, 425);

    triangle(840, 185, 850, 185, 845, 225);
    triangle(860, 185, 870, 185, 865, 225);
    triangle(880, 185, 890, 185, 885, 225);
    triangle(900, 185, 910, 185, 905, 225);

    triangle(90, 535, 100, 535, 95, 575);
    triangle(110, 535, 120, 535, 115, 575);
    triangle(130, 535, 140, 535, 135, 575);
    triangle(150, 535, 160, 535, 155, 575);
    pop();
}