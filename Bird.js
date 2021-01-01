class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.smoke = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x > 200 && this.body.velocity.x > 5){
      var pos = [this.body.position.x,this.body.position.y];
      this.smoke.push(pos);
    }
 
    for(var i = 0; this.smoke.length > i; i = i+1){
      image(this.smokeImage,this.smoke[i][0],this.smoke[i][1]);
    }
    
  }
}
