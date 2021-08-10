const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber= new Rubber(600,300,30);
    iron= new Iron(200,300,50,50)
    stone= new Stone(500,300,70,20)


}

function draw(){
    background("lightBlue");
    
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display()
    iron.display();
    stone.display()
    
 
}