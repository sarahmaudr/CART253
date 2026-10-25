/**
 * Spooky Messages!
 * Sarah-Maude Roy
 * 
 * Click to show a random Halloween message. 
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

// the list of all possible messages
let messages = [
    "Boo!🎃",
    "Happy Halloween🧛!",
    "🧟Did you hear that noise?🧟",
    "👻 The ghosts are hungry tonight... 👻"
];


// the sentence currently shown (starts as the first one)
let message = "OOoOooOOOooOooOooOuh!";

/**
 * Creates a 550 x 850 canvas
*/
function setup() {
    createCanvas(550, 850);
}


/**
 * Draws a black background and the current message 
 * in the middle of the canvas.
*/
function draw() {
    background(0);
    drawMessage(message, 275, 425, 28);
}

/**
 * Draws a piece of text (words) centered at x, y
 * with the given size, in the color orange.
 */
function drawMessage(words, x, y, size){
    push();
    fill(255, 140, 0);
    textAlign(CENTER, CENTER);
    textSize(size);
    textFont("Papyrus");
    text(words, x, y);
    pop();
}

/**
 * Returns one random sentence from the messages list
 */
function getRandomMessage(){
    let chosen = random(messages);
    return chosen;
}

/**
 * When the mouse is clicked, picks a new random message
 */
function mousePressed(){
    message = getRandomMessage();
}