/**
 * Sorting Hat
 * Sarah-Maude Roy
 * 
 * A sorting Hat that thinks about your Hogwarts house. If you leave the mouse alone for 3 seconds, it announces a house. 
 * If you move the mouse, it loses its train of thought, goes back to thinking and picks a new house.
 * 
 * Events used: mouseMoved() and millis() to mesure time passing.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

// the time in milliseconds of the last mouse movement 
let lastMoveTime = 0;

// the possible houses
let houses = ["🦁GRYFFINDOR!🦁", "🐍SLYTHERIN!🐍", "🦅RAVENCLAW!🦅", "🦡HUFFLEPUFF!🦡"];

// the house currently chosen by the hat
let chosenHouse = "";

/**
 * creates the 1200x600 canvas and picks the first house
*/
function setup() {
    createCanvas(1200, 600);
    chosenHouse = random(houses);
}


/**
 * Chooses what the hat says and displays it, restarts when the mouse is moved
*/
function draw() {
    // how long the hat has been waiting without movement
    let waitTime = millis() - lastMoveTime;
    let message = "";

    // dark brown background
    background(40, 20, 10);

    // under 3 seconds the hat is thinking, after that it annonces its decision
    if (waitTime < 3000) {
        message = "Hmm...";
    }
    else {
        message = chosenHouse;
    }

    // text style: centered, magical font, pale gold
    textAlign(CENTER, CENTER);
    textSize(64);
    textFont("Papyrus");
    fill(230, 200, 120);

    text(message, width / 2, height / 2);   
}

/**
 * resets the timer so the hat starts thinking again and draws a new house randomly
 */
function mouseMoved() {
    lastMoveTime = millis();
    chosenHouse = random(houses);
}