/**
 * Dream generator
 * Sarah-Maude Roy
 * 
 * 
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

// Stores all the dreams loaded from the JSON file
let dreams = [];

// Stores the dream currently displayed on the canvas
let currentDream = null;

/**
 * Loads the dreams from the JSON file before the sketch starts.
 */
async function preload() {
    dreams = await loadJSON("assets/data/dreams.json");
}

/**
 * Creates the canvas and selects the first dream to display.
*/
async function setup() {
    createCanvas(1000, 800);

    await preload();

    // Selects the first dream from the JSON array
    currentDream = dreams.dreams[0];
}


/**
 * Continuously draws the current dream on the canvas.
*/
function draw() {
    background(220);

    // Sets the text size
    textSize(32);
    // Displays the title of the current dream
    text(currentDream.title, 100, 100);
}

/**
 * Changes the displayed dream when the mouse is clicked.
 */
function mousePressed() {
    // Selects the second dream from the JSON array
    currentDream = dreams.dreams[1];
}