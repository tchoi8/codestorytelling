function setup() {
createCanvas(500,500);
 

}

function draw() {

	background(200);
	
	strokeWeight(2);
	 	
	fill(0);
    triangle(230+mouseX/5, 105, 245, 220, 256, 105)
	strokeWeight(30);
	
   
    fill(0,80,250);
	ellipse(250,605,200,600);
    strokeWeight(5);
	fill(mouseX,100,11);
 	ellipse(255,255,200);
 	
	fill(230,230,230, 100);
	
    ellipse(mouseX+50,255,50); 
    ellipse(mouseX+120,255,50); 
    line(mouseX+70,250,mouseX+100,250);
 	
 	strokeWeight(11);
    line(200,320,250,mouseY);
    line(250,mouseY,310,320);
    
    strokeWeight(3);
    
   line(190,mouseY/1.7,230,200);
    line(270,200,310,mouseY/1.7);
    
    point(210,250,10,10); 
    point(290,250,10,10); 
}
