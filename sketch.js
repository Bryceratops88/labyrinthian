let cube;
let cubes = [];
let x;
let y;
let size;
let redColor;
let black;
let gold;
let orange;
let blueColor;
let periwinkle;
let colorList = [];
let angle = 0;
let centerX;
let centerY; 



function setup() {
  createCanvas(windowWidth, windowHeight);
  size = random(50, 100);
  black = color(0, 0, 0);
  redColor = color(217, 54, 50);
  gold = color(229, 172, 50);
  orange = color(233, 120, 36);
  blueColor = color(0, 0, 128);
  periwinkle = color(102, 103, 171);
  colorList = [orange, redColor, gold];

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mouseMoved() {
      cube = new Cube();
      cubes.push(cube);
  }

function draw() {
  background(255);
  angle -= 0.1;
  
  for (let cube of cubes) {
    cube.render();
  }  
  
}

class Cube {
  constructor() {
    
    this. x = mouseX - 20;
    this.startx = this.x;
    this.y = mouseY - 20;
    this.size = size;
    this.colorChoice = random(colorList);
    this.thickness = random(1, 3);
    this.angle = angle;
    
  }
    update() {
    
  }
  render() {
    push();
    
    stroke(black);
    strokeWeight(this.thickness);
    fill(this.colorChoice);

    translate(this.x + this.size / 2, this.y + this.size /2 );
    
    rotate(this.angle);
    
    //this loop will draw squares within squares
    let scaleFactor = 1;

    for (let i = 0; i < 4; i++) {
      let s = this.size * scaleFactor;

      if (i === 3) {
        s *= 0.8;
      }
      
      rect(-s /2, -s / 2, s, s);
      scaleFactor *= 0.75;  
    }


    pop();
  }
}
