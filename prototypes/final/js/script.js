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

    drawDoor();

    // The object floats gently up and down
    push();
    translate(width / 2, 350 + sin(frameCount * 0.03) * 12);
    drawObject(currentDream);
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

/**
 *  Draws a permanent magical door
 */
function drawDoor () {
    push();
    translate(500, 760); // centered horizontally, lower
    scale(1.2)
    noStroke();

    // Pulsing magical glow
    let pulse = sin(frameCount * 0.05) * 12;
    for (let i = 0; i < 5; i++) {
        fill(190, 130, 255, 25);
        ellipse(0, -140, 170 + i * 35 + pulse, 300 + i * 35 + pulse);
    }

    // Magical light on the floor
    fill(200, 150, 255, 80);
    ellipse(0, 0, 160, 24);

    // Frame
    fill("#2b1450");
    rect(-72, -232, 144, 232);
    arc(0, -232, 144, 144, PI, TWO_PI);

    // Door
    fill("#6a3fb5");
    rect(-60, -220, 120, 220);
    arc(0, -220, 120, 120, PI, TWO_PI);

    // Panels
    fill("#7d52c9");
    rect(-45, -170, 40, 70);
    rect(5, -170, 40, 70);
    rect(-45, -85, 40, 60);
    rect(5, -85, 40, 60);

    // Glowing star 
    fill(255, 240, 150, 120 + sin(frameCount * 0.08) * 80);
    ellipse(0, -275 + 60, 30, 30);
    fill("#fff3a0");
    ellipse(0, -215, 12, 12);

    // Golden knob
    fill("#d4af37");
    ellipse(40, -100, 14, 14);

    // Twinkling sparkles around the door
    let twinkle = 150 + sin(frameCount * 0.1) * 100;
    fill(255, 255, 255, twinkle);
    ellipse(-95, -200, 8, 8);
    ellipse(100, -150, 6, 6);
    ellipse(-110, -80, 5, 5);
    ellipse(95, -250, 7, 7);
    ellipse(-80, -270, 5, 5);

    pop();
}

function drawObject(dream) {
    
    //Whale
    if (dream.object.shape === "whale") {
        push();
        translate(-60, -80);
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
        translate(-280, 150); // left and lower
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

    } else if (dream.object.shape === "moon") {
        push();
        translate(280, -150);
        noStroke();

        // Full moon
        fill("#c0c0bf");
        ellipse(0, 0, 320, 320);

        // Craters 
        fill("#cbcbca");
        ellipse(-70, -60, 78, 78);
        ellipse(60, -90, 52, 52);
        ellipse(85, 30, 96, 96);
        ellipse(-40, 70, 62, 62);
        ellipse(-105, 40, 36, 36);
        ellipse(20, -20, 30, 30);

        fill("#8b8b88");
        ellipse(-70, -60, 64, 64);
        ellipse(60, -90, 40, 40);
        ellipse(85, 30, 80, 80);
        ellipse(-40, 70, 48, 48);
        ellipse(-105, 40, 26, 26);
        ellipse(20, -20, 20, 20);

        pop();
        
    } else if (dream.object.shape === "butterfly") {
        fill("yellow");
            ellipse(200,100,100,100);
        
        
    } else if (dream.object.shape === "mirror") {
        fill("blue");
            ellipse(200,100,100,100);
    }
}