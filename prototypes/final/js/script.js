/**
 * Dream generator
 * Sarah-Maude Roy
 * 
 * An interactive piece that builds a random, illustrated dream every time you click. Each dream combines a place, 
 * a strange object and a feeling, and each one is drawn on screen.
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
    drawObject(currentDream);
    pop();

    drawDoor();

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

/**
 * 
 */
function drawDoor () {

}

function drawObject(dream) {
    
    //Whale
    if (dream.object.shape === "whale") {
        push();
        translate(-60, 0); // draw() already centers the object
        noStroke();

        // Tail (two triangles make the fork)
        fill("#16424a");
        triangle(190,-10, 310, -80, 295, 20);   // upper fluke
        triangle(190, 10, 310, 80, 295, -20);     // lower fluke

        // Body
        fill("#16424a");
        ellipse(0, 0, 340, 180);

        // Narrow part of the body leading to the tail
        ellipse(40, 0, 390, 160);

        // Belly (lighter bottom half)
        fill("#e8f1f8");
        arc(-20, 5, 290, 160, 0, PI, CHORD);

        // Flipper
        fill("#16424a");
        ellipse(-20, 60, 100, 40);

        // Eye
        fill("black");
        ellipse(-115, -15, 12, 12);
        fill("white");
        ellipse(-113, -17, 4, 4);

        // Water spout
        fill(255, 255, 255, 200);
        ellipse(20, -75, 14, 22);
        ellipse(-10, -65, 14, 14);
        ellipse(50, -60, 14, 14);

        pop();

    } else if (currentDream.object.shape === "clock") {
        push();
        translate(-250, 100); // left and lower
        noStroke();

        // Base
        fill("#4a2c17");
        rect(-70, 150, 140, 30);

        // Main body (the tall case)
        fill("#6b3f1f");
        rect(-55, -60, 110, 215);

        // Glass door on the lower part (shows the pendulum)
        fill("#2e1a0d");
        rect(-35, 55, 70, 85);

        // Pendulum
        stroke("#d4af37");
        strokeWeight(3);
        line(0, 55, 0, 115);
        noStroke();
        fill("#d4af37");
        ellipse(0, 115, 24, 24);

        // Head of the clock (top part, wider than the body)
        fill("#4a2c17");
        rect(-65, -150, 130, 100);

        // Roof (triangle on top)
        triangle(-75, -150, 75, -150, 0, -200);

        // Clock face
        fill("#f5ecd0");
        ellipse(0, -100, 85, 85);

        // Hour marks (12, 3, 6, 9)
        fill("black");
        ellipse(0, -137, 5, 5);
        ellipse(37, -100, 5, 5);
        ellipse(0, -63, 5, 5);
        ellipse(-37, -100, 5, 5);

        // Clock hands
        stroke("black");
        strokeWeight(3);
        line(0, -100, 0, -128);   // minute hand
        line(0, -100, 18, -100);  // hour hand
        noStroke();

        // Center dot
        fill("black");
        ellipse(0, -100, 8, 8);

        pop();

    } else if (dream.object.shape === "stairs") {
        fill("green");
            ellipse(200,100,100,100);
        

    } else if (dream.object.shape === "butterfly") {
        fill("yellow");
            ellipse(200,100,100,100);
        
        
    } else if (dream.object.shape === "mirror") {
        fill("blue");
            ellipse(200,100,100,100);
    }
}