// Here is where I will create the constructor or factory function for the stage items and all their controllers

// The code I need to load images into an array

var charA = [];
var charB = [];
var bgs = [];

function preload() {
  for (var i=0; i<5; i++) {
    imgs[i] = loadImage("charA_"+i+".jpg"); 
  }
}


function StageChar(i)) {
	  //ellipse(width/2,height/2,map(sensor2,0,1023,20,width),map(sensor2,0,1023,20,height)); //apply the sensor value to the radius of the ellipse
  if (map(sensor2,0,1023,0,width) > 1000-charA[i].width){
    image(charA[i],map(sensor2,0,1023,0,width)-1000,200);
    image(charA[i],map(sensor2,0,1023,0,width),200);
   
  } else{
  image(charA[i],map(sensor2,0,1023,0,width),200);
}
}


function draw() {
 /* image(imgs[3], 0, 0);
  
  for (var i=0; i<5; i++) {
    image(imgs[i], random(width), random(height)); 
  }*/
}