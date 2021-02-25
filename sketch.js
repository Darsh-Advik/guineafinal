var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var allDesks;
var distance = 0;
var database;
var bg;
var row1;
var form, player, game;
var Desk;
/*var desk1;*/
var cars, car1, car2, car3, car4;
var desks, desk1, desk2, desk3, desk4;
//var desk5;

function preload(){

bg = loadImage ("BG.png")

}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  background(bg);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.maze();
    game.play();
  }
}
