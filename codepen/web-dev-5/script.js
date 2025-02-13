//genuary day5
let w, n;
let colors = [
  "#414245", 
  "#5c5d5f", 
  "#78797b", 
  "#959698", 
  "#b4b4b5", 
  "#d3d3d4"
]
function setup() {
  w = min(windowWidth * 0.9, 500);
  canvas = createCanvas(w, w);
  describe(
    ""
  );
noStroke()
  n = int(random(5,30));
  r = int(random(20,50))
  d = w/n
  c = d*sqrt(3)/2
  colors = [
  color(40,50,70), 
  color(150,160,180), 
  color(200,230,240)
]
  strokeCap(ROUND)
}

function draw() {
  t = frameCount/8000;
  translate(w/2,w/2)
  scale(0.9 + 0.5*cos(t*10))
  push()
  // rotate(-PI/6)
  for(let i = -n;i<=n*2;i++){
    for(let j = -w*2;j<=w*2;j+=d){
      if(abs(i)%2===1){
        g = d/2
      }else{
        g = 0
      }
      c1 = colors[(abs(int(i*j+j)))%colors.length]
        fill(c1)

      triangle(-w/2+i*c,-w/2+j+g,-w/2+(i+1)*c,-w/2+g+j-d/2,-w/2+(i+1)*c,-w/2+g+j+d/2)
      c1 = colors[(abs(int(i+r/10*abs(sin(j/r+t-i*j)))))%colors.length]
       fill(c1)
      triangle(-w/2+i*c,-w/2+j+g,-w/2+(i+1)*c,-w/2+j-d/2+g,-w/2+i*c,-w/2+j-d+g)
    }
  }
  pop()
  
}

function mousePressed() {
  setup();
  draw();
  return false;
}
function touchStarted() {
  if (mouseY < 0 || mouseY > height || mouseX < 0 || mouseX > width) {
    return true; // Let the touch event pass through to other elements
  }
  setup();
  draw();
  // Prevent default touch behavior
  return false;
}

function keyPressed() {
  if (keyCode === 83) {
    save(cnv, "tile", "jpg");
  }
}
