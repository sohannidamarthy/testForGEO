class Iron{
	constructor(x,y,width,height) {
		var options = {
			restitution:0.8,
		    friction:3,
		    denisty:30

		};
		
        this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(x, y, width,height, options)
		World.add(world, this.body);

	};
	display()
	{
        var pos= this.body.position
		push()
		translate(pos.x, pos.y);
		rectMode(CENTER)
		strokeWeight(4);
		stroke("darkgrey");
		fill("grey");
			//draw the ellipse here to display the rubber ball
		rect(0,0,this.width,this.height)
			
		pop()
    };
};