// Here is where I will create the constructor or factory function for the stage items and all their controllers

// The code I need to load images into an array

var charA = [];
var charB = [];
var bgs = [];

function preload() {
// I'm loading all the images two arrays for the images

  for (var i=0; i<3; i++) {
    charA.push(loadImage("images/"+"charA_"+i+".png")); 
    charB.push(loadImage("images/"+"charB_"+i+".png")); 
    bgs.push(loadImage("images/"+"bg_"+i+".png")); 
  }
}


function StageChar(char, tempS, tempY ) {

  // i is the image number
  // tempS is the sensor Value it is assigned to
  // temp Y is the y value
  // I need to find a way to set the XStart value of the potentiometer

  // Now I need to add a mouse clicked event

  this.y = tempY;
  this.s = tempS;
  this.Char = char;

  this.clicker = function () {
  
      console.log("clicked!");
    
  }
	  
  if (map(this.s,0,1023,0,width) > 1000-this.Char.width){
    image(this.Char,map(this.s,0,1023,0,width)-1000,this.y);
    image(this.Char,map(this.s,0,1023,0,width),this.y);
   
  } else{
    image(this.Char,map(this.s,0,1023,0,width),this.y);
  }
  return this;
}
