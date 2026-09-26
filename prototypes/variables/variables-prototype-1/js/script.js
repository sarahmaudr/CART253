/**
 * I AM ON FIRE !
 * Sarah-Maude Roy
 * 
 * An artwork that shows a face slowly catching on fire.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";


let fire = {
    x: 470,
    y: 300,
    size: 35
};

let fire2 = {
    x: 500,
    y: 300,
    size: 35
};

let smoke = {
    x: 555,
    y: 300,
    size: 35
};

/**
 * create a black canvas
*/
function setup() {
    // create a 1000x600 canvas
    createCanvas(1000, 600);

    // a black background
    background("black");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    updateFire();
    drawFire();
    drawHead();
}

function updateFire() {
    fire.x += random(-4, 4);
    fire.y += random(-5, 3);

    fire2.x += random(-4, 4);
    fire2.y += random(-5, 3);

    smoke.x += random(-4, 4);
    smoke.y += random(-5, 3);

    fire.size += random(-1, 1.5);
    fire2.size += random(-1, 1.5);
    smoke.size += random(-1, 1);
}

function drawFire() {
    push();
    noStroke();
    fill("orange");
    ellipse(fire.x, fire.y, fire.size);
    ellipse(fire.x, fire.y, fire.size);
    pop();

    push();
    noStroke();
    fill("red");
    ellipse(fire2.x, fire2.y, fire2.size);
    ellipse(fire2.x, fire2.y, fire2.size);
    pop();

    push();
    noStroke();
    fill("grey");
    ellipse(smoke.x, smoke.y, smoke.size);
    ellipse(smoke.x, smoke.y, smoke.size);
    pop();
}

function drawHead() {
    push();
    noStroke();
    fill("yellow");
    circle(500, 400, 300);
    pop();

    push();
    fill("black");
    circle(460, 285, 50);
    circle(540, 285, 50);
    ellipse(500, 350, 50, 75);
    pop();
}