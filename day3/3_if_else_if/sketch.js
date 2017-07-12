function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(155);
  noStroke();
  if (mouseX < 100) {
    fill(0);
    rect(200, 200, 100, 100);
  }
  else if (mouseX > 400){
     fill(0,255,0);
    rect(200,200,100,100);
  }
  else {
    fill(255,0,0);
       rect(200,200,100,100);
 
  }
}


