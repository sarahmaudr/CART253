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
    size: 20
};

let lightRadius = 100;

/**
 * 
*/
function setup() {
    createCanvas(1500, 800);
}


/**
 * 
*/
function draw() {
    background(0);

let distance = dist(mouseX, mouseY, snitch.x, snitch.y);

    if (lumosActivate){
        push();
        fill("white");
        noStroke();
        circle(mouseX,mouseY,400);
        pop();
    }
}

function mousePressed(){
    lumosActivate = !lumosActivate;
}