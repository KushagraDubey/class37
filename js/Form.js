class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
         title.html("CAR RACING GAME"); 
         title.position(130,0);
         var input = createInput("NAME");
         var button = createButton('PLAY');
         var greeting = createElement('h3');
         input.position(230, 160);
         button.position(250, 200);
         button.mousePressed(function(){ 
         input.hide();
         button.hide();
         var name = input.value();
         playerCount = playerCount + 1;
         player.update(name);
         player.updateCount(playerCount);
         greeting.html("Hello "+ name);
         greeting.position(330, 160);
         });

  
    }
}