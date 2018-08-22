let angle=0.3;
let cam;
function setup() {
createCanvas(500,500,WEBGL);
cam=createCapture(VIDEO);
cam.size(650,650);
//cam.hide();
}
function draw() {
//background(0);
//texture(kitten);
//let dx=mouseX-width/2;
//let dy=mouseY-height/2;
//directionalLight(10,150,5,0,-1,0);
//pointLight(10,250,0,0,-5,0);
rotateY(angle*0.3);
rotateX(angle*0.3);
texture(cam);
box(200,200);
angle +=0.07;
}
