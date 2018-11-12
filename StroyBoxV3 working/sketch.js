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
var x = 0;
var char1, char2, 
  char1Index = 0, 
  char2Index = 0;
var alreadyRegisteredClick = false;

var serialPortName = "/dev/cu.usbmodem1421";  //FOR PC it will be COMX on mac it will be something like "/dev/cu.usbmodemXXXX"
                              //Look at P5 Serial to see the available ports

/*function preload() {
  img = loadImage('images/snail.png');
  imgTwo = loadImage('images/fish.png')
}*/


function setup() {
  
  createCanvas(1000,560);
  //Setting up the serial port
  serial = new p5.SerialPort();     //create the serial port object
  serial.open(serialPortName);      //open the serialport. determined 
  serial.on('open',ardCon);         //open the socket connection and execute the ardCon callback
  serial.on('data',dataReceived);   //when data is received execute the dataReceived function
}

function draw() {
  background(255);
  stroke(0);
  
 if (sensor1==0)
  {
  x = x - 5;
  if (x < (-width)) {
   x = 0;
  }
  image(bgs[2],x/0.8,10);
  image(bgs[2],(width/0.8)+(x/0.8),10);
  image(bgs[1],x,300);
  image(bgs[1],width+x,300);

 

  }
    else
    {
        image(bgs[2],x/0.8,10);
        image(bgs[2],(width/0.8)+(x/0.8),10);
        image(bgs[1],x,300);
        image(bgs[1],width+x,300);
    }

//First Char Dragon function StageChar(char, tempS, tempY)
  
  char1 = StageChar(charA[char1Index], sensor2, 200);
  char2 = StageChar(charB[char2Index], sensor3, 200);


// mouse press function to change the characters

// for (i=0, i > 4, i++){

// }

if (mouseIsPressed == true) {
    if (!alreadyRegisteredClick) {
      char1.clicker(); 
      if (char1Index < charA.length - 1) {
        char1Index += 1;
      } else {
        char1Index = 0;
      }
      alreadyRegisteredClick = true;
    }
    
    // StageChar(charA[1]);
    
  } else {
    alreadyRegisteredClick = false;
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



