/**
 * The Shy Ghost
 * Sarah-Maude Roy
 * 
 * An interactive prototype where a ghost reacts to mouse proximity by appearing when it gets close. 
 * It also reacts when the mouse is pressed by scarying you.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

let ghostX;
let ghostY;

/**
 * creates a 800x600 canvas
*/
function setup() {
    createCanvas(800, 600);

    ghostX = width/2;
    ghostY = height/2;
}


/**
 * draws a shy ghost when the mouse gets close to it, on a dark background, and scares you when you press the mouse
*/
function draw() {
    // darck background
    background(30, 30, 55);

    let d = dist(mouseX, mouseY, ghostX, ghostY);

    // first condition : you get scared when you press the mouse !
    if (mouseIsPressed) {
        // body
        push();
        fill(255);
        noStroke();
        ellipse(ghostX, ghostY, 400, 420);
        rect(ghostX - 200, ghostY, 400, 160, 0, 0, 60, 60);
        pop();

        // eyes
        push();
        fill(255, 0, 0);
        noStroke();
        ellipse(ghostX - 80, ghostY - 40, 60, 60);
        ellipse(ghostX + 80, ghostY - 40, 60, 60);
        pop();

        //big mouth
        push();
        fill(0);
        ellipse(ghostX, ghostY + 80, 120, 150);
        pop();

        // text : BOO !
        fill(255, 200, 0);
        textSize(96);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("BOO !", 400, 300);
    }

    else if (d < 250) {
        push();
        fill(255, 200, 220);
        noStroke();
        ellipse(ghostX, ghostY, 225, 300);
        rect(ghostX - 113, ghostY, 226, 120, 0, 0, 35, 35);
        pop();

        // eyes
        push();
        fill(0);
        noStroke();
        ellipse(ghostX - 30, ghostY - 30, 40, 40);
        ellipse(ghostX + 30, ghostY - 30, 40, 40);
        pop();

        push();
        fill(255);
        noStroke();
        ellipse(ghostX - 40, ghostY - 40, 15, 15);
        ellipse(ghostX + 20, ghostY - 40, 15, 15);
        pop();

        // red cheeks
        push();
        fill(255, 100, 150);
        ellipse(ghostX - 50, ghostY - 10, 40, 20);
        ellipse(ghostX + 50, ghostY - 10, 40, 20);
        pop();
    }
}