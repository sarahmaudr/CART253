/**
 * Ghosts!!!
 * Sarah-Maude Roy
 * 
 * 
 * 
 */

"use strict";

// creates a list
let ghosts = [];

/**
 * Creates the canvas
*/
function setup() {
    // creates a 1000x600 canvas
    createCanvas(1000, 600);

    // adding to the list
    ghosts.push(createGhost(100, 200));
    ghosts.push(createGhost(400, 200));
    ghosts.push(createGhost(600, 100));
    ghosts.push(createGhost(250, 500));
    ghosts.push(createGhost(900, 200));
    ghosts.push(createGhost(800, 400));
    ghosts.push(createGhost(520, 400));
    ghosts.push(createGhost(200, 50));
    ghosts.push(createGhost(35, 525));
    ghosts.push(createGhost(700, 550));
}


/**
 * Draws a black background, then draws multiple ghosts 
 * by calling the same funciton with different positions
*/
function draw() {
    // black background
    background(0);

    // for all ghosts in the list... creates ghosts
    for(let ghost of ghosts){
        drawGhost(ghost);
    }
}

/**
 * Draws one ghosts centered at a certain position (x, y)
 */
function drawGhost(ghost){
    // draws the body of the ghost
    push();
    fill(ghost.brightness);
    ellipse(ghost.x, ghost.y, 60, 85);
    pop();

    // draws the eyes of the ghost
    push();
    fill(0);
    ellipse(ghost.x - 8, ghost.y - 5, 8, 15);
    ellipse(ghost.x + 8, ghost.y - 5, 8, 15);
    pop();
}

/**
 * Creates ghosts with position, brightness and fadeSpeed
 */
function createGhost(x, y) {
    let ghost = {
        x: x,
        y: y,
        brightness: random(0, 255),
        fadeSpeed: random(0.5, 3)
    };
    return ghost;
}