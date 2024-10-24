let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let main_canvas;

let BackgroundImage;
let bird1;
let bird2;
let bird3;

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
  bird1 = loadImage('assets/bird1.png');
  bird2 = loadImage('assets/bird2.png');
  bird3 = loadImage('assets/bird3.png');
  Coolvetica = loadFont('assets/coolvetica.otf');
}

function setup() {

  main_canvas = createCanvas (screenWidth, screenHeight);
  main_canvas.parent('canvasContainer');
  
  // Create the Zealandia Button
  ZealandiaButton = createImg("assets/Zealandia-Logo.png");
  ZealandiaButton.position(50, screenHeight/2.5);
  ZealandiaButton.size(200,200); // Set the width and height of the button
  ZealandiaButton.addClass("image-button"); // Add the CSS class to apply styles
  ZealandiaButton.mousePressed(() => {
    window.open("https://www.visitzealandia.com/Get-Involved", "_blank");
  });

  //Create the Predator Free Wellington Button

  PredatorFreeWellingtonButton = createImg("assets/PredatorFreeWellington-Logo.png");
  PredatorFreeWellingtonButton.position(300,screenHeight/2.5);
  PredatorFreeWellingtonButton.size(200,200);
  PredatorFreeWellingtonButton.addClass("image-button");
  PredatorFreeWellingtonButton.mousePressed(() => {

    window.open("https://www.pfw.org.nz/support-us/", "_blank");
  });

  //Create the Predator Free NZ Button

  PredatorFreeNZButton = createImg("assets/PredatorFreeNZ-Logo.png");
  PredatorFreeNZButton.position(550,screenHeight/2.5);
  PredatorFreeNZButton.size(200,200);
  PredatorFreeNZButton.addClass("image-button");
  PredatorFreeNZButton.mousePressed(() => {
    window.open("https://predatorfreenz.org/get-involved/", "_blank");
  });

  //Create the Forest and Bird Button

  ForestAndBirdButton = createImg("assets/ForestAndBird-Logo.png");
  ForestAndBirdButton.position(800,screenHeight/2.5);
  ForestAndBirdButton.size(200,200);
  ForestAndBirdButton.addClass("image-button");
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

   fill(255,255,255,100);
   noStroke();
   rect(-50, screenHeight/5.5, screenWidth/1.27, screenHeight/6, 50);

   fill("#009245");
   textFont('Helvetica');
   textSize(screenHeight/22);
   text('Support the conservation of Kākā and other endemic species \nin the Wellington Region through these organisations:', screenWidth/35, screenHeight/4);

   //image(bird2,770,screenHeight/2,100,100);
   

}

window.addEventListener('resize',updateCanvasSize);
