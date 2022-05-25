class CannonBall {

  // 01) CONSTRUCTOR recebe x e y com parametros. Prop -> r, body, image
  constructor(x, y) 
  {
    var options = {
      isStatic: true
    };

    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("assets/cannonball.png");

    World.add(world, this.body);
  }


  // 09) mét que lança a bala
  shoot() {

    var newAngle = cannon.angle - 28;
    newAngle = newAngle * (3.14/180);

    // 10) puxar angulo do canhão já convertido
    var velocity = p5.Vector.fromAngle(newAngle);

    // 11) intensificar velocidade de lançamento multiplicando por 0.5
    velocity.mult(0.5);

    // 12) mudar isStatic para false com func setStatic da Matter
    Matter.Body.setStatic(this.body, false);

    // 13) defina vel da bola com func setVelocity da Matter
    Matter.Body.setVelocity(   this.body,   {x: velocity.x * (180/3.14), y: velocity.y * (180/3.14)}   );
  }


  // 02) display -> namespacing pos, push, imageMode, ellipse, pop
  display() 
  {
    var pos = this.body.position;

    push();

    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);

    pop();
  }
}
