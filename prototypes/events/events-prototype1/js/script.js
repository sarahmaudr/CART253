/**
 * Lumos!
 * Sarah-Maude Roy
 * 
 * Like in Harry Potter, users can make light appear with the click of their mouse. Who knows, you might find some hiddem objects!
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";


let lumosActivate = false;

let snitch = {
    x: 900,
    y: 300,
    size: 35
};

let lightRadius = 250;

/**
 * creates the size of the canvas, in this case it is 1500x800.
*/
function setup() {
    createCanvas(1500, 800);
}


/**
 * 
*/
function draw() {
    // black background
    background(0);

    let d = dist(mouseX, mouseY, snitch.x, snitch.y);

    // if we activate our spell (LUMOS), a lightGrey cirlce appears to help us see better.
    if (lumosActivate){
        push();
        fill("lightGrey");
        noStroke();
        circle(mouseX,mouseY,lightRadius);
        pop();

        // if the light is close enough from the golden snitch, it appears.
        if (d < lightRadius/3){
            // wings of the golden snitch
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
 * 
 */
function mousePressed(){
    lumosActivate = !lumosActivate;
}