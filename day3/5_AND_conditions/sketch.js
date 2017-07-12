function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(155);
  noStroke();
  if (mouseX < 250 && mouseY > 250) {
    fill(0);
    rect(200, 200, 100, 100);
  }  else {
    fill(255,0,0);
    rect(200,200,100,100);
 
  }
}


