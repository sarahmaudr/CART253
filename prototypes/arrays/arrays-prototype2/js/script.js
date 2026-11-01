/**
 * Title of Project
 * Sarah-Maude Roy
 * 
 * 
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

let gifts = [
    "a sweater two sizes too big",
    "socks (again)",
    "a lump of coal",
    "a fruitcake nobody wants",
    "a gift card to a store that closed",
    "a singing fish",
    "a tangle of fairy lights",
];
let currentGift = "";

let shakeTimer = 0;
const SHAKE_DURATION = 40;

let present = {
    x: 300,
    y: 350,
    size: 160,
};

/**
 * 
*/
function setup() {
    createCanvas(1000, 600);
}


/**
 * 
*/
function draw() {
    background(20, 60, 40);

    let shakeX = 0;
    if (shakeTimer > 0) {
        shakeX = random(-8, 8);
        shakeTimer--;
        if (shakeTimer === 0) {
            currentGift = random(gifts); // the reveal
        }
    }

    rectMode(CENTER);
    noStroke();

    // Box
    fill(200, 30, 40);
    rect(present.x + shakeX, present.y, present.size, present.size);

    // Ribbon (one vertical strip, one horizontal strip)
    fill(240, 190, 40);
    rect(present.x + shakeX, present.y, 24, present.size);
    rect(present.x + shakeX, present.y, present.size, 24);

    textAlign(CENTER);
    textSize(24);
    fill(255);
    text(currentGift, present.x, present.y + present.size / 2 + 50);
}

/**
 * 
 */
function mousePressed() {
    if (shakeTimer === 0 &&
        abs(mouseX - present.x) < present.size / 2 &&
        abs(mouseY - present.y) < present.size / 2) {
        shakeTimer = SHAKE_DURATION;
        currentGift = ""; 
    }
}