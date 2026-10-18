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

    let d = dist(mouseX, mouseY, snitch.x, snitch.y);

    if (lumosActivate){
        push();
        fill("white");
        noStroke();
        circle(mouseX,mouseY,lightRadius);
        pop();

        if (d < lightRadius/3){
            push();
            //fill the snitch yellow, the last number is transparency.
            fill(200, 200, 100);
            circle(snitch.x, snitch.y, snitch.size);
            pop();
        }
    }
}

function mousePressed(){
    lumosActivate = !lumosActivate;
}