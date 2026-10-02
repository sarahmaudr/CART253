/**
 * The Curious Plant
 * Sarah-Maude Roy
 * 
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

let plantX;
let plantY;


/**
 * 
*/
function setup() {
    createCanvas(600, 600);
    plantX = width/2;
    plantY = height/2;
}


/**
 * 
*/
function draw() {
    background("lightGreen");

    let offsetX = 0;

    // the stem
    stroke("green");
    strokeWeight(12);
    line(plantX, plantY, plantX, height);

    if (mouseIsPressed) {
        if (mouseX > plantX) {
            offsetX = -40;
        } else {
            offsetX = 40;
        }

        // the head
        push();
        fill("darkRed");
        noStroke();
        ellipse(plantX + offsetX, plantY -20, 120, 100);
        pop();
    
        // X eyes
        stroke("black");
        strokeWeight(4);

        // left eye
        line(
            plantX + offsetX - 25,
            plantY - 35,
            plantX + offsetX - 15, 
            plantY - 25
        );
        line(
            plantX + offsetX - 15,
            plantY - 35,
            plantX + offsetX - 25, 
            plantY - 25
        );

        // right eye
        line(
            plantX + offsetX + 15,
            plantY - 35,
            plantX + offsetX + 25, 
            plantY - 25
        );
        line(
            plantX + offsetX + 25,
            plantY - 35,
            plantX + offsetX + 15, 
            plantY - 25
        );
    }
}