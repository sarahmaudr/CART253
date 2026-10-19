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

// verify the text typed by the user
let typedText = "";

// verify whether the last key pressed was wrong
let wrongKey = false;

// verify whether the player has finished typing the spell
let spellCast = false;

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
    // red background when the player makes a mistake, black otherwise
    if (wrongKey) {
        background(120, 0, 0);
    }
    else if (spellCast) {
        background(60, 20, 100);
    }
    else {
        background(0);
    }
    // text parameters
    textAlign(CENTER, CENTER);
    textSize(64);
    fill("white");
    textFont("Georgia");

    // text position
    text(currentSpell, width/2, height/2);
    text(typedText, width/2, height/2 + 100);

    if (wrongKey) {
        textSize(128);
        text("💥", width/2, height/2 - 150);
    }
    else if (spellCast) {
        textSize(128);
        text("✨", width/2, height/2 - 150);
    }

    textSize(16);
    text("Press ENTER for a new spell", width/2, height - 50);
}

/**
 * verify the text lenght and spelling to make sure the user casted the right spell !
*/
function keyPressed() {
    // ENTER restarts with a new spell, whatever the situation
    if (key === "Enter") {
        currentSpell = random(spells);
        typedText = "";
        wrongKey = false;
        spellCast = false;
        return;
    }

    // once the spell is cast, ignore the other keys until ENTER
    if (spellCast) {
        return;
    }

    // is it the next expected letter?
    if (key === currentSpell[typedText.length]) {
        wrongKey = false;
        typedText = typedText + key;

        // all the letters are right: the spell is cast
        if (typedText === currentSpell) {
            spellCast = true;
        }
    }
    else {
        wrongKey = true;
    }
}
