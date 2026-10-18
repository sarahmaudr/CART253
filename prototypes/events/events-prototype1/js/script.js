/**
 * Title of Project
 * Sarah-Maude Roy
 * 
 * 
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

let lumosActivate = false;

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

    if (lumosActivate){
        push();
        fill("white");
        noStroke();
        circle(mouseX,mouseY,500);
        pop();
    }
}

function mousePressed(){
    lumosActivate = !lumosActivate;
}