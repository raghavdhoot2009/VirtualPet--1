//Create variables here
var dog,Dog,happydog,database,foodS,foodStock;
var database;

function preload()
{
//load images here
dog = loadImage("images/dogImg.png");  
happydog = loadImage("images/dogImg1.png");
}

function setup() {

  database=firebase.database();
  console.log(database);
  createCanvas(500, 500);
  Dog = createSprite(200,300,150,150);
  Dog.addImage(dog);
  Dog.scale=0.15;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);

}


function draw() {  
  background(100,50,100); 
  
  if(keyWentDown(UP_ARROW)){ 
  WriteStock(foodS); 
  Dog.addImage(happydog); 
  }

  drawSprites(); 
  fill(255,255,254); 
  stroke("black"); 
  text("Food remaining : "+foodS,170,200); 
  textSize(13); 
  text("Press UP_ARROW Key To Feed Drago Milk!",150,20,290,15);


}

function readStock(data){
foodS=data.val();
}

function WriteStock(x){
if(x<=0){ 
x=0; 
}else
{
x=x-1;
} 
database.ref('/').update({ Food:x })

}