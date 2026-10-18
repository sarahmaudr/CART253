/**
 * Casting Spells
 * Sarah-Maude Roy
 * 
 * 
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

let spells = ["accio", "lumos", "expelliarmus"];

let currentSpell = "";

/**
 * 
*/
function setup() {
    createCanvas(1000, 700);
    currentSpell = random(spells);
}


/**
 * 
*/
function draw() {
    background(0);
    textAlign(CENTER, CENTER);
    textSize(64);
    fill("white");
    
    text(currentSpell, width/2, height/2);
}