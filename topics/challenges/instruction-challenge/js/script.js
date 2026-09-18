/**
 * Poppy fields
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
    drawMountains();
    drawFlowers();
    drawBirds();
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
    fill("white");
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
    pop();
}

function drawMountains(){
// drawing mountains
    push();
    noStroke();
    fill("darkgreen");
    ellipse(0, 600, 1500, 600);
    pop();

    push();
    noStroke();
    fill("green");
    ellipse(1000, 600, 1500, 600);
    pop();
}

function drawFlowers(){
// drawing flowers
    push();
    noStroke();
    fill("red");
    circle(100, 400, 50);
    circle(250, 425, 50);
    circle(400, 400, 50);
    circle(525, 425, 50);
    circle(700, 400, 50);
    circle(825, 425, 50);
    circle(950, 400, 50);
    pop();

    push();
    stroke("yellow")
    fill("black");
    circle(100, 400, 25);
    circle(250, 425, 25);
    circle(400, 400, 25);
    circle(525, 425, 25);
    circle(700, 400, 25);
    circle(825, 425, 25);
    circle(950, 400, 25);
    pop();
}

function drawBirds(){
//drawing birds
    push();
    strokeWeight(10);
    stroke("black");
    noFill();
    arc(300, 200, 200, 75, PI, PI + QUARTER_PI);
    arc(150, 200, 100, 50, PI + QUARTER_PI, TWO_PI);
    pop();
}