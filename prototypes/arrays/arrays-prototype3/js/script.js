/**
 * Title
 * Sarah-Maude Roy
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

let reindeer = [];
const NUM_REINDEER = 5;

/**
 * 
*/
function setup() {
    createCanvas(1000, 600);

    for (let i = 0; i < NUM_REINDEER; i++) {
        reindeer.push({ x: width / 2, y: height / 2 });
    }
}


/**
 * 
*/
function draw() {
    background(15, 25, 55);

    // The leader follows the mouse
    reindeer[0].x = lerp(reindeer[0].x, mouseX, 0.1);
    reindeer[0].y = lerp(reindeer[0].y, mouseY, 0.1);

    // Everyone else follows the one in front
    for (let i = 1; i < reindeer.length; i++) {
        reindeer[i].x = lerp(reindeer[i].x, reindeer[i - 1].x, 0.1);
        reindeer[i].y = lerp(reindeer[i].y, reindeer[i - 1].y, 0.1);
    }

    noStroke();
    for (let i = 0; i < reindeer.length; i++) {
        let r = reindeer[i];

        // Body
        fill(140, 90, 50);
        ellipse(r.x, r.y, 40);

        // Leader gets a glowing red nose
        if (i === 0) {
            fill(255, 0, 0);
            ellipse(r.x + 22, r.y, 14);
        }
    }
}