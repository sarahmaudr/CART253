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

    rectMode(CENTER);
    noStroke();

    // Box
    fill(200, 30, 40);
    rect(present.x, present.y, present.size, present.size);

    // Ribbon (one vertical strip, one horizontal strip)
    fill(240, 190, 40);
    rect(present.x, present.y, 24, present.size);
    rect(present.x, present.y, present.size, 24);

    textAlign(CENTER);
    textSize(24);
    fill(255);
    text(currentGift, present.x, present.y + present.size / 2 + 50);
}

/**
 * 
 */
function mousePressed() {
    // Only react if the click is on the present
    if (abs(mouseX - present.x) < present.size / 2 &&
        abs(mouseY - present.y) < present.size / 2) {
        currentGift = random(gifts); // random() can pick from an array!
    }
}