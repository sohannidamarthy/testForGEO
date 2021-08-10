class Stone{
	constructor(x,y,width,height)
	{
	    var options={
			'restitution':0.8,
			'friction':0.9,
			'denisty':12

		};
		
        this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(x, y, width,height, options);
		World.add(world, this.body);

	};
	display()
	{
			var pos= this.body.position
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("yellow");
			fill("magenta");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height)
			
			pop()
    };
};
