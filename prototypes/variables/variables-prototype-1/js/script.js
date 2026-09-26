/**
 * MY HEAD IS ON FIRE !
 * Sarah-Maude Roy
 * 
 * An artwork that shows a face slowly catching on fire.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

// creating the Fire with base settings
let flame = {
    x: 470,
    y: 300,
    size: 35
};
// creating the second Fire with base settings
let flame2 = {
    x: 500,
    y: 300,
    size: 35
};
// creating the smoke with base settings
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
 * drawing the head catching on fire
*/
function draw() {
    updateFire();
    drawFire();
    drawHead();
}

/**
 * Updates the position of the fire and smoke randomly since it is impredictable
 */
function updateFire() {
    // the first big flame
    flame.x += random(-4, 4);
    flame.y += random(-5, 3);

    // the second big flame
    flame2.x += random(-4, 4);
    flame2.y += random(-5, 3);

    // the smoke
    smoke.x += random(-4, 4);
    smoke.y += random(-5, 3);

    // giving random size as the flames and smoke change position
    flame.size += random(-1, 1.5);
    flame2.size += random(-1, 1.5);
    smoke.size += random(-1, 1);
}

/**
 * Draws the fire with different colored flames and smoke
 */
function drawFire() {
    // first flame is orange 
    push();
    noStroke();
    fill("orange");
    // 2 ellipses don't give the same result as 1 for some reason
    ellipse(flame.x, flame.y, flame.size);
    ellipse(flame.x, flame.y, flame.size);
    pop();

    // second flame is red
    push();
    noStroke();
    fill("red");
    ellipse(flame2.x, flame2.y, flame2.size);
    ellipse(flame2.x, flame2.y, flame2.size);
    pop();

    // the grey smoke
    push();
    noStroke();
    fill("grey");
    ellipse(smoke.x, smoke.y, smoke.size);
    ellipse(smoke.x, smoke.y, smoke.size);
    pop();
}

/**
 * draws a big head with a scared face
 */
function drawHead() {
    // the big head
    push();
    noStroke();
    fill("yellow");
    circle(500, 400, 300);
    pop();

    // the face
    push();
    fill("black");
    circle(460, 285, 50);
    circle(540, 285, 50);
    ellipse(500, 350, 50, 75);
    pop();
}