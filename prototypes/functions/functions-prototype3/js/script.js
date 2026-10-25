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

let messages = [
    "Boo!🎃",
    "Happy Halloween🧛!",
    "🧟Did you hear that noise?🧟",
    "👻 The ghosts are hungry tonight... 👻"
];

// the sentence currently shown (starts as the first one)
let message = "OOuuuooouuuuUUoOuh!";

/**
 * 
*/
function setup() {
    createCanvas(550, 850);
}


/**
 * 
*/
function draw() {
    background(0);

    background(0);
    fill(255, 140, 0);
    textAlign(CENTER, CENTER);
    textSize(32);
    textFont("Papyrus");
    text(message, width / 2, height / 2);
}

/**
 * Returns one random sentence from the messages list
 */
function getRandomMessage(){
    let chosen = random(messages);
    return chosen;
}

function mousePressed(){
    message = getRandomMessage();
}