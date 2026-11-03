/**
 * Athanasia Iliopoulos, Razan Elsaygh, Sarah-Maude Roy
 * 
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

let x = 0;
let y = 0;
let s = 0;


var c1, c2;


/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
    c1 = color("lightBlue");
    c2 = color("#ea1bf9");
    setGradient(c1, c2);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
   
    while (x <= 500) {
        line(x, 0, x, height);
        x += 50;
        stroke(s+=25);
    }

    while (y <= 500) {
        line(0, y, width, y);
        y += 50;
    }
}

function setGradient(c1, c2) {
    noFill();
    for (var y = 0; y < height; y++) {
        var inter = map(y, 0, height, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(0, y, width, y);
    }
}