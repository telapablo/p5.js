
var img = [];
var mm;
var ims = 0;


function preload() {
  img[1] = loadImage("galo1.jpg");
  img[2] = loadImage("galo2.jpg");
  img[3] = loadImage("galo3.jpg");
  img[4] = loadImage("galo4.jpg");
 }
 
function setup(){
   createCanvas(windowWidth, windowHeight);
}
 

function draw(){
  background (51);
  
  mm = map(mouseX, 0, windowWidth, 1, 4);
  //for (var i = 0; i < 4; ){ 
  //img[] = loadImage('img'+mm+'.jpg');
  //}

   
   image(img[mm], 0, 0);

  }




   