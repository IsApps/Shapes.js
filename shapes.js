function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  rect(130, 90, 120, 150);
  ellipse(150, 270, 140);
  arc(250, 200, 100, 100, 0, 270, PIE);
  arc(125, 175, 160, 50, 0, 200, OPEN);
  arc(85, 95, 100, 65, 75, 100, CHORD);
  
}
