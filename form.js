class form
{
    constructor(){
         this.title=createElement('h2');
         this.title.html("Angry Birds Game");
        this.title.position(450,10);
         this.button=createButton("PLAY");
         this.button.position(600,350);
    }
    display(){
        
        
        
        
    
        
       
        this.button.mousePressed(function(){
           
            Gamestate=start;
           

        })
      
    }
    hide(){
        this.button.hide();

    }
}