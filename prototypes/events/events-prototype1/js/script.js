/**
 * Lumos!
 * Sarah-Maude Roy
 * 
 * A dark screen where the mouse becomes a wand. Click to cast Lumos (light on) or Nox (light off).
 * While the light is on, a circle of light follows the mouse and a hidden golden snitch with flapping wings 
 * only becomes visible when the light gets close  to it.
 * 
 * Events used: mousePressed(), mouseX / mouseY to follow the wand.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

// whether the lumos spell is currently on (true) or off (false)
let lumosActivate = false;

// the hidden golden snitch. Its position is randomized in setup()
let snitch = {
    x: 0,
    y: 0,
    size: 35
};

// the diameter of the circle of light around the mouse
let lightRadius = 350;

/**
 * creates the 1500x800 canvas and hides the golden snitch at random position.
*/
function setup() {
    createCanvas(1500, 800);
    snitch.x = random(100,900);
    snitch.y = random(100,700);
}


/**
 * Makes the goden snitch appear when lumos is on AND the mouse is near it.
*/
function draw() {
    // black background
    background(0);

    let d = dist(mouseX, mouseY, snitch.x, snitch.y);

    // if we activate our spell (LUMOS), a light grey cirlce appears to help us see better.
    if (lumosActivate){
        push();
        fill("lightGrey");
        noStroke();
        circle(mouseX,mouseY,lightRadius);
        pop();

        // if the light is close enough to the golden snitch, it appears.
        if (d < lightRadius/3){
            // wings of the golden snitch. Their hieght changes with sin() over time,
            // which makes them flap.
            push();
            fill("grey");
            noStroke();
            ellipse(snitch.x - snitch.size * 0.6, snitch.y, snitch.size * 0.9, snitch.size * (0.3 + 0.2 * sin(frameCount * 0.6))); // left wing
            ellipse(snitch.x + snitch.size * 0.6, snitch.y, snitch.size * 0.9, snitch.size * (0.3 + 0.2 * sin(frameCount * 0.6))); // right wing
            pop();

            // the body of the golden snitch
            push();
            fill(200, 200, 100);
            noStroke();
            circle(snitch.x, snitch.y, snitch.size);
            pop();
        }
    }
}

/**
 * Changes the state of 'lumosActivate' between true or false (Lumos / Nox) evertime the mouse is pressed.
 */
function mousePressed(){
    lumosActivate = !lumosActivate;
}