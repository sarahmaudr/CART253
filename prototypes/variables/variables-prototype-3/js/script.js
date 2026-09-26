/**
 * Celebration !
 * Sarah-Maude Roy
 * 
 * A dynamic artwork with confettis falling for a celebration.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

// settings of the confettis
let confetti1 = {x: 100, y: 0, velocity: { x: 0, y: 0 }, fill: "red"};
let confetti2 = {x: 200, y: 0, velocity: { x: 0, y: 0 }, fill: "green"};
let confetti3 ={x: 300, y: 0, velocity: { x: 0, y: 0 }, fill: "blue"};
let confetti4 ={x: 400, y: 0, velocity: { x: 0, y: 0 }, fill: "yellow"};
let confetti5 ={x: 500, y: 0, velocity: { x: 0, y: 0 }, fill: "pink"};
let confetti6 ={x: 600, y: 0, velocity: { x: 0, y: 0 }, fill: "orange"};
let confetti7 ={x: 700, y: 0, velocity: { x: 0, y: 0 }, fill: "purple"};
let confetti8 ={x: 800, y: 0, velocity: { x: 0, y: 0 }, fill: "white"};

/**
 * creates a canvas
*/
function setup() {
    // a 1000x600 canvas
    createCanvas(1000, 600);
}


/**
 * draws a blue background and creates functions to draw the confettis
*/
function draw() {
    // the blue background
    background("lightBlue");
    updateConfetti();
    drawConfetti();
}

/**
 * sets the movement of each confetti
 */
function updateConfetti() {
    confetti1.velocity.y += 0.01;
    confetti1.x += random(-3, 3);
    confetti1.y += confetti1.velocity.y;

    confetti2.velocity.y += 0.01;
    confetti2.x += random(-3, 3);
    confetti2.y += confetti2.velocity.y;

    confetti3.velocity.y += 0.01;
    confetti3.x += random(-3, 3);
    confetti3.y += confetti3.velocity.y;

    confetti4.velocity.y += 0.01;
    confetti4.x += random(-3, 3);
    confetti4.y += confetti4.velocity.y;

    confetti5.velocity.y += 0.01;
    confetti5.x += random(-3, 3);
    confetti5.y += confetti5.velocity.y;

    confetti6.velocity.y += 0.01;
    confetti6.x += random(-3, 3);
    confetti6.y += confetti6.velocity.y;

    confetti7.velocity.y += 0.01;
    confetti7.x += random(-3, 3);
    confetti7.y += confetti7.velocity.y;

    confetti8.velocity.y += 0.01;
    confetti8.x += random(-3, 3);
    confetti8.y += confetti8.velocity.y;
}

/**
 * draws all the confettis
 */
function drawConfetti() {
    push();
    noStroke();

    fill(confetti1.fill);
    rect(confetti1.x, confetti1.y, 15, 30);

    fill(confetti2.fill);
    rect(confetti2.x, confetti2.y, 15, 30);

    fill(confetti3.fill);
    rect(confetti3.x, confetti3.y, 15, 30);

    fill(confetti4.fill);
    rect(confetti4.x, confetti4.y, 15, 30);

    fill(confetti5.fill);
    rect(confetti5.x, confetti5.y, 15, 30);

    fill(confetti6.fill);
    rect(confetti6.x, confetti6.y, 15, 30);

    fill(confetti7.fill);
    rect(confetti7.x, confetti7.y, 15, 30);

    fill(confetti8.fill);
    rect(confetti8.x, confetti8.y, 15, 30);

    pop();
}