"use strict";
app.Food = function(){

	function Food(image,canvasWidth,canvasHeight) {
		// ivars
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.active = true;
		this.age = Math.floor(Math.random() * 128);
		this.color = "#A2B";
		this.x = this.canvasWidth / 4 + Math.random() * this.canvasWidth / 2;
		this.y = 0;
		this.xVelocity = 0
		this.yVelocity = 200;
		this.amplitude = 0.5;
		this.image = image;
		this.width = 10;
		this.height = 10;
	};

	var p = Food.prototype;
	//Creates the falling food
	  p.draw = function(ctx) {
			var halfW = this.width/2;
			var halfH = this.height/2;
			
			if(!this.image){
				ctx.fillStyle = this.color;
				ctx.fillRect(this.x - halfW, this.y - halfH, this.width, this.height);
				
			} else{
				ctx.drawImage(this.image,this.x - halfW, this.y - halfH, this.width, this.height);
			}
			
	  };
	//updates the food's position as it goes down the screen
	p.update = function(dt) {
		this.xVelocity = this.amplitude * Math.sin(this.age * Math.PI * dt);
		this.x += this.xVelocity;
		this.y += this.yVelocity *dt;
		this.age++;
		this.active = this.active && inBounds(this);
		
	  };
	//Checks if the food is inbounds
	  function inBounds(obj) {
		return obj.y <= obj.canvasHeight + obj.height * 0.5;
	  };
	
	return Food;
	
}();
