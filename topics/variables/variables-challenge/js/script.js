/**
 * The Artistic chimney
 * Athanasia Iliopoulos, Razan Elsaygh, Sarah-Maude Roy
 * 
 * Drawing a smoking chimney 
 */

"use strict";

let brush = {
  x: 500,
  y: 335,
  size: 5,
};

let brush2 = {
  x: 500,
  y: 335,
  size: 5,
}

let brush3 = {
  x: 500,
  y: 335,
  size: 5,
}

let brush4 = {
  x: 500,
  y: 335,
  size: 5,
}
let brush5 = {
  x: 500,
  y: 335,
  size: 5,
}

/**
 * Creating a 1000x640 canvas and a background
*/
function setup() {
    // canvas 
    createCanvas(1000, 640);
    // background
    background("blue");
}

/**
 * drawing a chimney 
*/
function draw() {
    // the base of the chimney
    push();
    fill("darkRed");
    strokeWeight(10);
    rect(400, 370, 200, 350);
    pop();

    // the top of the chimney
    push();
    fill("grey");
    strokeWeight(10);
    rect(375, 350, 250, 50);
    pop();

    push();
    fill("red");
    strokeWeight(5);
    rect(425, 425, 75, 25);
    rect(500, 550, 75, 25);
    rect(425, 600, 75, 25);
    rect(425, 500, 75, 25);
    rect(500, 470, 75, 25);
    pop();

    push();
    fill("brown");
    strokeWeight(10);
    rect(0, 500, 400, 150);
    rect(600, 500, 410, 200);
    pop();

    updateBrush();
    drawBrush();
}

function updateBrush() {
  // Update position randomly
  brush.x += random(-3, 3);
  brush.y += random(-2, -0,1);

  brush2.x += random(-3, 3);
  brush2.y += random(-2, -0,1);

  brush3.x += random(-3, 3);
  brush3.y += random(-2, -0,1);

  brush4.x += random(-3, 3);
  brush4.y += random(-2, -0,1);

  brush5.x += random(-3, 3);
  brush5.y += random(-2, -0,1);
  
  // Update brush size randomly
  brush.size += random(-1, 1.5);
}  

function drawBrush() {
  // Display the brush with its fill
  push();
  noStroke();
  fill("grey");
  ellipse(brush.x, brush.y, brush.size);
  pop();

  push();
  noStroke();
  fill("black");
  ellipse(brush2.x, brush2.y, brush.size);
  pop();

  push();
  noStroke();
  fill("white");
  ellipse(brush3.x, brush3.y, brush.size);
  pop();

  push();
  noStroke();
  fill("brown");
  ellipse(brush4.x, brush4.y, brush.size);
  pop();

  push();
  noStroke();
  fill("lightBlue");
  ellipse(brush5.x, brush5.y, brush.size);
  pop();
}
