/**
 * Athanasia Iliopoulos, Razan Elsaygh, Sarah-Maude Roy
 */

"use strict";

/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

const target = {
  x: 50,
  y: 350,
  size: 100,
  fill: "#59cce3",
  fills: {
    noOverlap: "#59cce3", // blue for no overlap
    overlap: "#00ff00" // green for overlap
  }
}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  drawUser();
  drawPuck();
  movePuck();
  drawTarget();
  checkTarget();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

function movePuck() {
const d = dist(user.x, user.y, puck.x, puck.y);
const overlap = (d < user.size/2 + puck.size/2);
    if (overlap && puck.x > user.x) {
        puck.x = puck.x + 2
    }
    else if (overlap && puck.x < user.x){
        puck.x = puck.x - 2
    }
    if (overlap && puck.y < user.y){
        puck.y = puck.y - 2
    }
    else if (overlap && puck.y > user.y){
        puck.y = puck.y + 2
    }
}   

function drawTarget(){
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();
}

function checkTarget(){
const d = dist(puck.x, puck.y, target.x, target.y);
const overlap = (d < puck.size/10 + target.size/10);
    if (overlap) {
        target.fill = target.fills.overlap;
    }
    else {
        target.fill = target.fills.noOverlap;
    }
}