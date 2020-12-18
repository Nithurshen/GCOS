var car;
var wall;
var deformation;
var weight;
var speed;
var rand1;
var rand2;

function setup() {

  createCanvas(800,400);

  carImage = loadImage("car.png");

  car = createSprite(100, 200, 20, 10);
  car.addImage("Car Image", carImage);
  car.scale = 0.25;

  wall = createSprite(750, 200, 20, 400);
  
}

function draw() {
  background(255,255,255);  

  randomSystem();

  workSystem();

  drawSprites();
}

function randomSystem(){

    rand1 = Math.round(random(1000000, 20000000));
    rand2 = Math.round(random(10, 250));

}

function workSystem(){

      weight = rand1;

      speed = rand2;

      car.velocityX = speed;

      deformation = weight/22500 * speed/22500 * speed/22500;

      if(car.x - wall.x < car.width/2 + wall.width/2 &&
        wall.x - car.x < car.width/2 + wall.width/2 &&
        car.y - wall.y < car.height/2 + wall.height/2 &&
        wall.y - car.y < car.height/2 + wall.height/2){

      if(deformation >= 180){

          wall.shapeColor = "Red";

      }

      if(deformation <= 180 && deformation >= 80){

        wall.shapeColor = "Yellow";

    }

       if(deformation < 80){

      wall.shapeColor = "Green";

  }
  
}


}