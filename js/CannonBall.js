class CannonBall {

  // 01) CONSTRUCTOR recebe x e y com parametros
  constructor(x, y){

    var options = {
      isStatic: true
    }

    this.body = Matter.Bodies.circle(x, y, 30, options);
    World.add(world, this.body)

    this.image = loadImage("assets/cannonball.png");

   
  }


  // 18) mét que lança a bala
  shoot() {

    // 22) puxar angulo do canhão já convertido
    var newAngle = cannon.angle - 28;
    newAngle = newAngle * (3.14/180);

    var velocity = p5.Vector.fromAngle(newAngle);

    // 23) intensificar velocidade de lançamento multiplicando por 0.5
    velocity = velocity * 0.5;

    // 19) mudar isStatic para false com func setStatic da Matter
    Matter.Body.setStatic(this.body, false);

    // 20) defina vel da bola com func setVelocity da Matter
    Matter.Body.setVelocity(this.body, {x: velocity.x * (180/3.14), y: velocity.y * (180/3.14)} );   

  }


  // 06) mét display
  display() 
  {

    // 07) namespacing para pos do corpo
    var pos = this.body.position; //namespacing -> apelidos

    push;
    image(this.image, pos.x, pos.y, 30, 30);
    pop();


  }
}
