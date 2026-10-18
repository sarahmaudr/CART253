/**
 * Casting Spells
 * Sarah-Maude Roy
 * 
 * Practice your spells (or spelling). The user can practice 3 differents spells by writing them with the keys.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

// the spells
let spells = ["accio", "lumos", "expelliarmus"];

// verify the current spell on the screen
let currentSpell = "";

//verify the text typed by the user
let typedText = "";

/**
 * creates a 1000x700 canvas a and selects random spells.
*/
function setup() {
    createCanvas(1000, 700);
    currentSpell = random(spells);
}


/**
 * creates the background of the canvas, and the text (color, size, position...)
*/
function draw() {
    // black background
    background(0);
    // text parameters
    textAlign(CENTER, CENTER);
    textSize(64);
    fill("white");
    // text position
    text(currentSpell, width/2, height/2);
    text(typedText, width/2, height/2 + 100);
}

/**
 * verify the text lenght and spelling to make sure the user casted the right spell !
*/
function keyPressed() {
    // is it the right lenght
    if (key === currentSpell[typedText.length]) {
        typedText = typedText + key;

        // is it the same letters
        if (typedText === currentSpell) {
            currentSpell = random(spells);
            typedText = "";
        }
    }
}

