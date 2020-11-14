class stone {
   constructor(x, y, radius) {
       var options = {
           isStatic:true,
           restitution:0,
           friction:1,
           density:1.2
       }
       this.radius = radius;
       this.x = x;
       this.y = y;
       this.image = loadImage("stone.png");
       this.body = Bodies.circle(x, y, radius/2, options);
    World.add ( world, this.body);
}

display(){
    var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     // rotate(angle);
      //ellipseMode(CENTER);
      fill(200,125,150);
      //ellipse(0, 0, this.radius, this.radius);
      image(this.image,0, 0, this.radius, this.radius);
      pop();

}
}