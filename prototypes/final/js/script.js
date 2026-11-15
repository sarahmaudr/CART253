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
 * Loads the dreams from the JSON file.
 */
async function preload() {
    dreams = await loadJSON("assets/data/dreams.json");
}

/**
 * Creates the canvas and generates the first dream.
*/
async function setup() {
    createCanvas(1000, 800);

    await preload();

    // Generates the first random dream
    generateDream();
}

/**
 * Randomly selects one element from each category.
 */
function generateDream() {

    // Selects a random location
    let randomLocation = floor(random(dreams.locations.length));

    // Selects a random object
    let randomObject = floor(random(dreams.objects.length));

    // Selects a random feeling
    let randomFeeling = floor(random(dreams.feelings.length));

    // Combines the selected elements into one dream
    currentDream = {
        location: dreams.locations[randomLocation],
        object: dreams.objects[randomObject],
        feeling: dreams.feelings[randomFeeling]
    };
}

/**
 * Displays the current dream on the canvas.
 */
function draw() {
    // Changes the background according to the dream location
    background(currentDream.location.background);

    textSize(32);

    // Displays the dream elements
    text(currentDream.location.name, 100, 100);
    text(currentDream.object, 100, 200);
    text(currentDream.feeling, 100, 300);
}

/**
 * Generates a new random dream when the mouse is clicked.
 */
function mousePressed() {
    generateDream();
}