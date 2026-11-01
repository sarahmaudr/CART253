/**
 * Reindeer 🦌🦌🦌🦌🦌🦌🦌🦌
 * Sarah-Maude Roy
 * 
 * A red-nosed reindeer follows the mouse and a chain of reindeer
 * follows behind it, all stored in an array. The background is a
 * snowy Christmas night with stars, a moon and falling snow.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

// The array of reindeer
let reindeer = [];
// How many reindeer are in the chain
const NUM_REINDEER = 8;

// Arrays for the background snowflakes and stars
let snow = [];
let stars = [];

/**
 * Creates the canvas, then fills the reindeer, snow and stars arrays
*/
function setup() {
    createCanvas(1000, 600);

    // Make the reindeer, all starting in the middle of the screen
    for (let i = 0; i < NUM_REINDEER; i++) {
        reindeer.push({ x: width / 2, y: height / 2 });
    }

    // Make 80 snowflakes at random positions with random sizes and speeds
    for (let i = 0; i < 80; i++) {
        snow.push({
            x: random(0, width),
            y: random(0, height),
            size: random(2, 6),
            speed: random(0.5, 2),
        });
    }

    // Make 40 stars in the upper part of the sky
    for (let i = 0; i < 40; i++) {
        stars.push({
            x: random(0, width),
            y: random(0, height * 0.6),
            size: random(1, 3),
        });
    }
}


/**
 * Draws the background, moves the chain of reindeer and draws them
*/
function draw() {
    // dark blue background
    background(15, 25, 55);
    drawBackground();

    // The leader follows the mouse
    reindeer[0].x = lerp(reindeer[0].x, mouseX, 0.1);
    reindeer[0].y = lerp(reindeer[0].y, mouseY, 0.1);

    // Everyone else follows the one in front
    for (let i = 1; i < reindeer.length; i++) {
        reindeer[i].x = lerp(reindeer[i].x, reindeer[i - 1].x, 0.1);
        reindeer[i].y = lerp(reindeer[i].y, reindeer[i - 1].y, 0.1);
    }

    // Draw every reindeer
    for (let i = 0; i < reindeer.length; i++) {
        drawReindeer(reindeer[i].x, reindeer[i].y, i === 0);
    } 
}

/**
 * Draws one reindeer facing right, centered on x and y.
 * If isLeader is true, it gets a red nose.
 */
function drawReindeer(x, y, isLeader) {
    push();
    translate(x, y); // everything below is drawn relative to the reindeer

    // Legs (drawn first so the body covers the tops)
    stroke(110, 70, 40);
    strokeWeight(5);
    line(-22, 12, -22, 34);
    line(-10, 12, -10, 34);
    line(10, 12, 10, 34);
    line(22, 12, 22, 34);

    // Antlers
    stroke(210, 180, 130);
    strokeWeight(3);
    line(36, -34, 34, -56);   // left antler
    line(34, -44, 26, -50);
    line(34, -52, 40, -60);
    line(44, -34, 48, -56);   // right antler
    line(47, -44, 55, -50);
    line(48, -52, 44, -60);

    noStroke();

    // Tail
    fill(245);
    ellipse(-36, -8, 12);

    // Body
    fill(140, 90, 50);
    ellipse(0, 0, 70, 40);

    // Neck and head
    ellipse(28, -14, 20, 34);
    ellipse(40, -26, 28, 22);

    // Ear
    ellipse(32, -37, 8, 14);

    // Eye
    fill(0);
    ellipse(44, -29, 4);

    // Nose: red for the leader, dark for everyone else
    if (isLeader) {
        fill(255, 0, 0);
        ellipse(53, -25, 11);
    } else {
        fill(40, 25, 15);
        ellipse(53, -25, 7);
    }
    pop();
}

/**
 * Draws the Christmas background: stars, moon, falling snow and snowy ground
 */
function drawBackground() {
    noStroke();

    // Stars
    fill(255, 255, 220);
    for (let s of stars) {
        ellipse(s.x, s.y, s.size);
    }

    // Moon
    fill(250, 250, 225);
    ellipse(880, 90, 80);
    fill(15, 25, 55);
    ellipse(900, 80, 70); // dark circle makes it a crescent

    // Falling snow
    fill(255);
    for (let flake of snow) {
        flake.y += flake.speed;
        if (flake.y > height) {
            flake.y = 0;
            flake.x = random(0, width);
        }
        ellipse(flake.x, flake.y, flake.size);
    }

    // Snowy ground
    fill(240, 245, 255);
    ellipse(200, height, 800, 400);
    ellipse(750, height, 700, 250);
}