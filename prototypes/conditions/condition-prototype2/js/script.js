/**
 * The Disgusted Plant
 * Sarah-Maude Roy
 * 
 * An interactive prototype with state changes using conditionals
 * The plant turns away in disgust when clicked.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

let plantX;
let plantY;


/**
 * creates a 600x600 canvas and defines plantX and plantY
*/
function setup() {
    createCanvas(600, 600);
    plantX = width/2;
    plantY = height/2;
}


/**
 * Creates a moving plants that reacts to the mouse click on a green background.
*/
function draw() {
    background("lightGreen");

    let offsetX = 0;

    // the stem
    push();
    stroke("green");
    strokeWeight(12);
    line(plantX, plantY, plantX, height);
    pop();

    // fist condition: when the mouse is pressed, the plant's head moves away
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
        push();
        stroke("black");
        strokeWeight(4);

        // left eye
        line(plantX + offsetX - 25, plantY - 35, plantX + offsetX - 15, plantY - 25);
        line(plantX + offsetX - 15, plantY - 35, plantX + offsetX - 25, plantY - 25);
        
        // right eye
        line(plantX + offsetX + 15, plantY - 35, plantX + offsetX + 25, plantY - 25);
        line(plantX + offsetX + 25, plantY - 35, plantX + offsetX + 15, plantY - 25);
        pop();

        // close mouth
        push();
        noFill();
        stroke(80, 0, 0);
        strokeWeight(4);
        line(plantX + offsetX - 20, plantY - 5, plantX + offsetX + 20, plantY - 5);
        pop();

        // text
        push();
        fill(150, 0 ,0);
        noStroke();
        textSize(24);
        textAlign(CENTER);
        text("no thanks.", plantX, plantY - 100);
        pop();
    }
    // second condition: when the mouse is not pressed, the plant looks like it wants to eat it.
    else {
        // the head
        push();
        fill(220, 40, 40);
        noStroke();
        ellipse(plantX, plantY - 20, 130, 110);
        pop();

        //opened mouth
        push();
        fill(100, 10, 10);
        noStroke();
        ellipse(plantX, plantY - 10, 90, 70);
        pop();

        // teeth
        push();
        fill(255);
        noStroke();
        triangle(plantX - 30, plantY - 40, plantX - 15, plantY - 40, plantX - 22, plantY - 25);
        triangle(plantX + 15, plantY - 40, plantX + 30, plantY - 40, plantX + 22, plantY - 25);
        pop();

        // eyes
        push();
        fill(255);
        noStroke();
        ellipse(plantX - 25, plantY - 60, 24, 24);
        ellipse(plantX + 25, plantY - 60, 24, 24);
        pop();

        push();
        fill(0);
        ellipse(plantX - 25, plantY - 60, 10, 10);
        ellipse(plantX + 25, plantY - 60, 10, 10);
    }
}