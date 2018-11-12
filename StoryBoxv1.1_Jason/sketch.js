//Creation&Computation
//reads 2 sensor value from arduino
//draws a circle based on the analog sensor value
//change the color based on the button
//uses JSON as the protocol
//requires p5.serialcontrol to be running
//and arduino running the SerialInput_1button_1ana sketch

var serial;       //variable to hold the serial port object


var sensor1;      //this variable will hold the value from "s1"
var sensor2;      //this variable will hold the value from "s2"
var sensor3;      //this variable will hold the value from "s2"
var img;          // here I will load two images
var imgTwo;       // second image load here

var serialPortName = "/dev/cu.usbmodem1411";  //FOR PC it will be COMX on mac it will be something like "/dev/cu.usbmodemXXXX"
                              //Look at P5 Serial to see the available ports


function preload() {
  img = loadImage('images/snail.png');
  imgTwo = loadImage('images/fish.png')
}


function setup() {
  
  createCanvas(1000,560);
  //Setting up the serial port
  serial = new p5.SerialPort();     //create the serial port object
  serial.open(serialPortName); //open the serialport. determined 
  serial.on('open',ardCon);         //open the socket connection and execute the ardCon callback
  serial.on('data',dataReceived);   //when data is received execute the dataReceived function
}

function draw() {
  background(255);
  stroke(0);
  
  if(sensor1==0)
  {
  fill(255,0,0);
  }
    else
    {
      fill(0,255,0);
    }

  
  //ellipse(width/2,height/2,map(sensor2,0,1023,20,width),map(sensor2,0,1023,20,height)); //apply the sensor value to the radius of the ellipse
  if (map(sensor2,0,1023,0,width) > 1000-img.width){
    image(img,map(sensor2,0,1023,0,width)-1000,200);
    image(img,map(sensor2,0,1023,0,width),200);
   
  } else{
  image(img,map(sensor2,0,1023,0,width),200);
}
    
// second animal move

    if (map(sensor3,0,1023,0,width) > 1000-imgTwo.width){
    image(imgTwo,map(sensor3,0,1023,0,width)-1000,250);
    image(imgTwo,map(sensor3,0,1023,0,width),250);
   
  } else{
  image(imgTwo,map(sensor3,0,1023,0,width),250);
}
  
}


function dataReceived()   //this function is called every time data is received
{
  
var rawData = serial.readStringUntil('\r\n'); //read the incoming string until it sees a newline
    console.log(rawData);                   //uncomment this line to see the incoming string in the console     
    if(rawData.length>1)                      //check that there is something in the string
    {                                         
      
      sensor1 = JSON.parse(rawData).s1;       //the parameter value .s1 must match the parameter name created within the arduino file
      sensor2 = JSON.parse(rawData).s2;
      sensor3 = JSON.parse(rawData).s3; 
    }
}

function ardCon()
{
  console.log("connected to the arduino!! Listen UP");
}


