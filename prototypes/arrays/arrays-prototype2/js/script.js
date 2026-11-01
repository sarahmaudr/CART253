/**
 * GIFTS GIFTS GIFTS !
 * Sarah-Maude Roy
 * 
 * Click the present to shake it open and get a random gift.
 * Every gift you receive is stored in an array and listed on the right.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 * Mountains of Christmas font (Google Fonts)
 * https://fonts.google.com/specimen/Mountains+of+Christmas
 */

"use strict";

// The possible gifts 
let gifts = [
    "a sweater two sizes too big",
    "socks (again)",
    "a lump of coal",
    "a fruitcake nobody wants",
    "a gift card to a store that closed",
    "a singing fish",
    "a tangle of fairy lights",
];

// The gift currently shown under the present
let currentGift = "";

// Counts down the frames of shaking. 0 means the present is not shaking.
let shakeTimer = 0;
// How many frames the present shakes for
const SHAKE_DURATION = 40;

// The present's position and size. Everything else is drawn relative to this.
let present = {
    x: 300,
    y: 350,
    size: 220,
};

// The possible wrapping colors
let wrapColors = [
    [200, 30, 40],   // red
    [40, 100, 200],  // blue
    [20, 110, 50],  // green
    [245, 245, 245],  // white
];

// The color the present is currently wrapped in
let currentColor = [200, 30, 40];

// Every gift received so far (grows as gifts are opened)
let received = [];

/**
 * Creates the 1000 x 600 canvas
*/
function setup() {
    createCanvas(1000, 600);
}


/**
 * Draws the present, bow, gift text and list of received gifts,
 * and handles the shaking and the gift reveal
*/
function draw() {
    background(20, 60, 40);

    // Shake the present sideways while the timer is running
    let shakeX = 0;
    if (shakeTimer > 0) {
        shakeX = random(-8, 8);
        shakeTimer--;
        // When the shake ends, pick a random gift and add it to the list
        if (shakeTimer === 0) {
            currentGift = random(gifts); // the reveal
            received.push(currentGift);
        }
    }

    rectMode(CENTER);
    noStroke();

    // Box
    fill(currentColor[0], currentColor[1], currentColor[2]);
    rect(present.x + shakeX, present.y, present.size, present.size);

    // Ribbon (one vertical strip, one horizontal strip)
    push();
    fill(240, 190, 40);
    rect(present.x + shakeX, present.y, 24, present.size);
    rect(present.x + shakeX, present.y, present.size, 24);
    pop();

    // Current gift text
    textFont("Mountains of Christmas");
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(32);
    fill(255);
    text(currentGift, present.x, present.y + present.size / 2 + 50);
    
    // Heading for the list of received gifts
    textAlign(LEFT);
    textSize(32);
    fill(255);
    text("Gifts received:", 600, 80);

    // Bow
    const bowX = present.x + shakeX;
    const bowY = present.y - present.size / 2;

    push();
    fill(240, 190, 40);
    ellipse(bowX - 28, bowY - 10, 50, 36);   // left loop
    ellipse(bowX + 28, bowY - 10, 50, 36);   // right loop
    pop();

    push();
    // Cut a hole in each loop so it looks like a ribbon loop
    fill(20, 60, 40);
    ellipse(bowX - 28, bowY - 10, 24, 16);
    ellipse(bowX + 28, bowY - 10, 24, 16);
    pop();

    push();
    // Knot in the middle
    fill(220, 160, 20);
    ellipse(bowX, bowY - 6, 22, 22);
    pop();

    // List (smaller)
    textSize(18)
    // Only show the 12 most recent so the list fits on screen
    let start = max(0, received.length - 12);
    for (let i = start; i < received.length; i++) {
        text((i + 1) + ". " + received[i], 600, 120 + (i - start) * 30);
    }

}

/**
 * When the mouse is clicked on the present, picks a new wrapping color,
 * clears the old gift and starts the shake
 */
function mousePressed() {
    currentColor = random(wrapColors);

    if (shakeTimer === 0 &&
        abs(mouseX - present.x) < present.size / 2 &&
        abs(mouseY - present.y) < present.size / 2) {
        shakeTimer = SHAKE_DURATION;
        currentGift = ""; 
    }
}