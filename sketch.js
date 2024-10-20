let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let main_canvas;

let BackgroundImage;

function updateCanvasSize(){

  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;

  resizeCanvas(screenWidth,screenHeight +100);
}

function preload(){

  BackgroundImage = loadImage('/assets/IMG_5351.jpg');
}

function setup() {
  main_canvas = createCanvas (screenWidth, screenHeight + 100);
  main_canvas.parent('canvasContainer');
  

}

function draw() {

  imageMode(CENTER);
  background(0,255,0);

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
 
  
 
   image(BackgroundImage, screenWidth/2, screenHeight/2, imgWidth*1.2, imgHeight);
}

window.addEventListener('resize',updateCanvasSize);
