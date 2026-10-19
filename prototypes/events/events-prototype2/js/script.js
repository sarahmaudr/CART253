/**
 * Casting Spells
 * Sarah-Maude Roy
 * 
 * A spell appears on screen and the player must type it letter by letter. A wrong letter changes the screen to red with an explosion, 
 * and finishing the spell turns the screen purple with sparkles. Pressing enter at any time starts again with a new spell.
 * 
 * Events used: keyPressed(), with key to read the types letter.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

// the list spells
let spells = ["accio", "lumos", "expelliarmus"];

// the spell currently on the screen
let currentSpell = "";

// the letters the player has typed correctly so far
let typedText = "";

// true when the last key pressed was the wrong letter (red screen)
let wrongKey = false;

// true when the player has typed the whole spell correctly (purple screen)
let spellCast = false;

/**
 * creates a 1000x700 canvas and picks the first spell randomly
*/
function setup() {
    createCanvas(1000, 700);
    currentSpell = random(spells);
}


/**
 * chooses the background of the canvas according to the state of the game, draws the spell, typed text, emoji 
 * and the restart instructions.
*/
function draw() {
    // red background on a mistake, purple on success, black otherwise
    if (wrongKey) {
        background(120, 0, 0);
    }
    else if (spellCast) {
        background(60, 20, 100);
    }
    else {
        background(0);
    }
    
    // text style: centered, white, big, with a classic font
    textAlign(CENTER, CENTER);
    textSize(64);
    fill("white");
    textFont("Georgia");

    // the spell to type, and bellow it what the player has typed so far
    text(currentSpell, width/2, height/2);
    text(typedText, width/2, height/2 + 100);

    // big emoji above the spell: explosion on mistake, sparkles on success
    if (wrongKey) {
        textSize(128);
        text("💥", width/2, height/2 - 150);
    }
    else if (spellCast) {
        textSize(128);
        text("✨", width/2, height/2 - 150);
    }

    // small reminder on how to restart
    textSize(16);
    text("Press ENTER for a new spell", width/2, height - 50);
}

/**
 * ENTER restarts the game. Otherwise, checks if the key is the next expected letter of the spell and updates the game state.
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

    // is it the next expected letter of the spell?
    if (key === currentSpell[typedText.length]) {
        wrongKey = false;
        typedText = typedText + key;

        // if all the letters are right, the spell is cast
        if (typedText === currentSpell) {
            spellCast = true;
        }
    }
    else {
        wrongKey = true;
    }
}
