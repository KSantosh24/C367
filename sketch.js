
var canvas,backgroundImage;
var database;
var form,player,game;
var playercount;
var gamestate=0;
var allPlayers;
function setup(){
    database = firebase.database();
    canvas=createCanvas(500,500);
    game=new Game();
    game.getState();
    game.start();
    
    
}

function draw(){
    background("white");
    if(playercount === 4){
        game.update(1);
      }
      if(gamestate === 1){
        clear();
        game.play();
      }
}