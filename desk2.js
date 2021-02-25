class desk{

constructor(){

  this.index1 = 0;
  this.name1 = null
  this.distance1 = null

}

getdesk(){

var deskref = database.ref("Desk")
deskref.on("value",(data)=>{Desk=data.val()})

}

Updatedesk(desk5){

    database.ref("/").update({Desk:desk5})

}

updatedesk1(){
    var DeskIndex = "Desks/desk" + this.index1;
    database.ref(DeskIndex).set({
      name:this.name1,
      distance:this.distance1
    });
  }

  static getPlayerinfo(){
    var playerInfoRef = database.ref('Desks');
    playerInfoRef.on("value",(data)=>{
      allDesks = data.val();
    })
  }
 
  /*display(){

    var cardboard1 =createSprite(0,35,120,15);
    cardboard1.shapeColor ="black";
    
    var cardboard2 =createSprite(100,0,15,140);
    cardboard2.shapeColor ="black";
    
    var cardboard3 =createSprite(100,70,120,15);
    cardboard3.shapeColor ="black";

  }*/

}

