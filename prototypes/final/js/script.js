/**
 * Title
 * Sarah-Maude Roy
 * 
 * 
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

let dreams = [];

let currentDream = null;


async function preload() {
    dreams = await loadJSON("assets/data/dreams.json");
}

/**
 * 
*/
async function setup() {
    createCanvas(1000, 800);

    await preload();

}


/**
 * 
*/
function draw() {

}