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
let dreams = null;

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
    let feeling = random(dreams.feelings);

    // Random positions for the background decoration (clouds, trees, bubbles)
    let decor = [];
    for (let i = 0; i < 10; i++) {
        decor.push({ x: random(width), y: random(height * 0.7), size: random(50, 140) });
    }

    // Random sparkles, as many as the feeling asks for in the JSON
    let sparks = [];
    for (let i = 0; i < feeling.sparkles; i++) {
        sparks.push({ x: random(width), y: random(height), size: random(3, 9), speed: random(0.3, 1.5) });
    }
        currentDream = {
            location: random(dreams.locations),
            object: random(dreams.objects),
            feeling: feeling,
            decor: decor,       // the clouds, trees or bubbles positions
            sparks: sparks,     // the sparkles
        };
}

/**
 * Displays the current dream on the canvas.
 */
function draw() {
    // Changes the background according to the dream location
    background(currentDream.location.background);
    drawLocation(currentDream);

    // The object floats gently up and down
    push();
    translate(width / 2, 350 + sin(frameCount * 0.03) * 12);
    //drawObject(currentDream.object.shape);
    pop();

    //drawFeeling(currentDream);
    //drawText(currentDream);
}

/**
 * Generates a new random dream when the mouse is clicked.
 */
function mousePressed() {
    generateDream();
}

/**
 * Draws the background scene for the dream's location
 */
function drawLocation(dream) {
    noStroke();

    if (dream.location.type === "clouds") {
        fill(255, 255, 255, 200);
        for (let d of dream.decor) {
            ellipse(d.x, d.y, d.size * 1.5, d.size * 0.6);
            ellipse(d.x + d.size * 0.3, d.y - d.size * 0.15, d.size, d.size * 0.6);
        }
       } else if (dream.location.type === "forest") {
        fill(60, 40, 30);
        rect(0, 650, width, 150); // ground
        for (let d of dream.decor) {
            fill(70, 40, 25);
            rect(d.x - 8, 650 - d.size * 0.5, 16, d.size * 0.5); // trunk
            fill(40, 130, 70);
            triangle(d.x - d.size * 0.4, 650 - d.size * 0.4,
                d.x + d.size * 0.4, 650 - d.size * 0.4,
                d.x, 650 - d.size * 1.4); // leaves
        }
    } else if (dream.location.type === "ocean") {
        noFill();
        stroke(255, 255, 255, 180);
        strokeWeight(2);
        for (let d of dream.decor) {
            ellipse(d.x, d.y, d.size * 0.4); // bubbles
        }
        noStroke();
        fill(230, 210, 150);
        rect(0, 720, width, 80); // sand
    }
}