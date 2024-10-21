let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let main_canvas;

let BackgroundImage;

var ZealandiaButton;
var PredatorFreeWellingtonButton;
var PredatorFreeNZButton;
var ForestAndBirdButton;

function updateCanvasSize(){

  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;

  resizeCanvas(screenWidth,screenHeight);
}

function preload(){

  BackgroundImage = loadImage('assets/BackgroundImage.jpg');
}

function setup() {
  main_canvas = createCanvas (screenWidth, screenHeight);
  main_canvas.parent('canvasContainer');
  
  // Create the Zealandia Button
  ZealandiaButton = createImg("assets/Zealandia-Logo.png");
  ZealandiaButton.position(50, screenHeight/3);
  ZealandiaButton.size(200,200); // Set the width and height of the button
  ZealandiaButton.mousePressed(() => {
    window.open("https://www.visitzealandia.com/Get-Involved", "_blank");
  });

  //Create the Predator Free Wellington Button

  PredatorFreeWellingtonButton = createImg("assets/PredatorFreeWellington-Logo.png");
  PredatorFreeWellingtonButton.position(300,screenHeight/3);
  PredatorFreeWellingtonButton.size(200,200);
  PredatorFreeWellingtonButton.mousePressed(() => {

    window.open("https://www.pfw.org.nz/support-us/", "_blank");
  });

  //Create the Predator Free NZ Button

  PredatorFreeNZButton = createImg("assets/PredatorFreeNZ-Logo.png");
  PredatorFreeNZButton.position(550,screenHeight/3);
  PredatorFreeNZButton.size(200,200);
  PredatorFreeNZButton.mousePressed(() => {
    window.open("https://predatorfreenz.org/get-involved/", "_blank");
  });

  //Create the Forest and Bird Button

  ForestAndBirdButton = createImg("assets/ForestAndBird-Logo.png");
  ForestAndBirdButton.position(800,screenHeight/3);
  ForestAndBirdButton.size(200,200);
  ForestAndBirdButton.mousePressed(() => {
    window.open("https://www.forestandbird.org.nz/support-us", "_blank");
  });



}

function draw() {

  imageMode(CENTER);
  background('#8CBFDB');

   // Determine aspect ratio
   let imgAspectRatio = BackgroundImage.width / BackgroundImage.height;
   let canvasAspectRatio = screenWidth / screenHeight;
 
   let imgWidth, imgHeight;
 
   // Resize the image proportionally to fit within the canvas
   if (imgAspectRatio > canvasAspectRatio) {
     imgWidth = screenWidth; // Width is constrained
     imgHeight = screenWidth / imgAspectRatio;
   } else {
     imgHeight = screenHeight; // Height is constrained
     imgWidth = screenHeight * imgAspectRatio;
   }
 
  
 
   image(BackgroundImage, screenWidth/2, screenHeight/2, imgWidth, imgHeight);
}

window.addEventListener('resize',updateCanvasSize);
