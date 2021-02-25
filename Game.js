class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
  }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      
      car1 = createSprite(100,200,60,60);
      car2 = createSprite(300,200,60,60);
      car3 = createSprite(500,200,60,60);
      car4 = createSprite(700,200,60,60);
      cars = [car1, car2, car3, car4];

      desk1 = createSprite(200,100,100,60);
      desk2 = createSprite(400,100,100,60);
      desk3 = createSprite(600,100,100,60);
      desk4 = createSprite(800,100,100,60);
      desks = [desk1, desk2, desk3, desk4];
      
    }
  
    play(){
      form.hide();
      Player.getPlayerInfo();
    
      if(allPlayers !== undefined){
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 0;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === player.index){
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      
      drawSprites();
    }
    maze(){ //maze made from maize!
      Desk = new desk();
      //desk1.display();
      desk.getPlayerinfo();
      Desk.Updatedesk();
      if(allDesks !== undefined){
        //var display_position = 100;
        
        //index of the array
        var index1 = 0;
  
        //x and y position of the cars
        var x = 0;
        var y;
  
        for(var plr in allDesks){
          //add 1 to the index for every loop
          index1 = index1 + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allDesks[plr].distance;
          desks[index1-1].x = x;
          desks[index1-1].y = y;
  
          if (index1 === player.index){
            //desks[index1 - 1].shapeColor = "red";no racism! all shall be same!
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index1-1].y
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && Desk.index !== null){
        Desk.distance1 +=10
        Desk.updatedesk1();
      }
      
      
    }

  }
  