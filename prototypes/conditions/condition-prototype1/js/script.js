/**
 * The Shy Ghost
 * Sarah-Maude Roy
 * 
 * 
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
 * 
*/
function draw() {
    // darck background
    background(30, 30, 55);

    let d = dist(mouseX, mouseY, ghostX, ghostY);


    if (mouseIsPressed) {
        // body
        push();
        fill(255);
        noStroke();
        ellipse(ghostX, ghostY, 260, 280);
        rect(ghostX - 130, ghostY, 260, 100, 0, 0, 40, 40);
        pop();

        // eyes
        push();
        fill(255, 0, 0);
        noStroke();
        ellipse(ghostX - 50, ghostY - 30, 40, 40);
        ellipse(ghostX + 50, ghostY - 30, 40, 40);
        pop();

        //big mouth
        push();
        fill(0);
        ellipse(ghostX, ghostY + 50, 80, 100);
        pop();

        // text : BOO !
        fill(255, 200, 0);
        textSize(64);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("BOO !", 400, 300);
    }

}