/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creating a 1000x640 canvas and a background
*/
function setup() {
    // canvas 
    createCanvas(1000, 640);
    // background
    background("blue");
}

/**
 * drawing a chimney 
*/
function draw() {
    // the base of the chimney
    push();
    fill("red");
    strokeWeight(10);
    rect(400, 370, 200, 350);
    pop();

    // the top of the chimney
    push();
    fill("grey");
    strokeWeight(10);
    rect(375, 350, 250, 50);
    pop();
}