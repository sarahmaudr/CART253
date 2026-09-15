/**
 * Title of Project
 * Athanasia Iliopoulos, Razan Elsaygh, Sarah-Maude Roy
 * 
 * Drawing a landscape
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
    createCanvas(1000,500);

}


/**
 * creating the landscape
*/
function draw() {
    drawSky();
    drawSun();
    drawClouds();
}

function drawSky(){
// color of the sky
    background("lightblue");
}

function drawSun(){
// drawing a sun
    push();
    noStroke();
    fill("yellow");
    circle(100, 100, 150);
    pop();
}

function drawClouds(){
// drawing clouds
    push();
    noStroke();
    fill(255);
    ellipse(300, 100, 75, 75);
    ellipse(260, 115, 60, 60);
    ellipse(300, 125, 75, 75);
    ellipse(340, 115, 60, 60);

    ellipse(750, 100, 75, 75);
    ellipse(710, 115, 60, 60);
    ellipse(750, 125, 75, 75);
    ellipse(790, 115, 60, 60);

    ellipse(525, 200, 75, 75);
    ellipse(485, 215, 60, 60);
    ellipse(525, 225, 75, 75);
    ellipse(565, 215, 60, 60);
    
}