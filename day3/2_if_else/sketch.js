function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(155);
  noStroke();
  if (mouseX > 250) {
    fill(0);
    ellipse(250, 250, 100, 100);
  }
  else{
    rect(200,200,100,100);
  }
}


