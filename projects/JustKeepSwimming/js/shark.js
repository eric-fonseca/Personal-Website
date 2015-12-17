"use strict";
app.Shark = function(){

	function Shark(image, image2, image3, image4, image5, image6, image7, canvasWidth, canvasHeight) {
		// ivars
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.active = true;
		this.age = Math.floor(Math.random() * 128);
		this.color = "grey";
		this.x = -1000;
		this.y = Math.random() * this.canvasHeight;
		this.initX = 10;
		this.initY = this.y - 25;
		this.xVelocity = 750;
		this.xVelocity2 = -750;
		this.image = image;
		this.image2 = image2;
		this.image3 = image3;
		this.image4 = image4;
		this.image5 = image5;
		this.image6 = image6;
		this.image7 = image7;
		this.width = 245;
		this.height = 100;
		this.sharkFrame = 0;
		this.frameDelay = 0;
		
		//Creates a 50% chance of creating a Shark from both the left and right sides of the screen
		if(Math.random()*2 > 1){
			this.lShark = true;
			this.num = 1;
		}else{
			this.lShark = false;
			this.x = this.canvasWidth + 1000;
			this.num = 2;
		}
	};	

	var p = Shark.prototype;
	
	  p.draw = function(ctx) {
			var halfW = this.width/2;
			var halfH = this.height/2;
		//Tells which frame the shark is on, depending on the Frame Delay
		if(this.frameDelay <= 10){
			this.sharkFrame = 0;
			this.frameDelay++;
		}
		else if (this.frameDelay > 10 && this.frameDelay <= 20){
			this.sharkFrame = 1;
			this.frameDelay++;
						
		}
		else if (this.frameDelay > 20 && this.frameDelay < 30){
			this.sharkFrame = 2;
			this.frameDelay++;	
					
		}
		else if(this.frameDelay >=30){
			this.sharkFrame = 1;
			this.frameDelay++;		
		}
		
		if(this.frameDelay >=40){
			this.frameDelay = 0;			
		}
		//Creates a shark coming from the left
			if( this.lShark){
				if(!this.image){
					ctx.fillStyle = this.color;
					ctx.fillRect(this.x - halfW, this.y - halfH, this.width, this.height);
					if(this.x < -500){
						ctx.fillStyle = "red";
						ctx.fillRect(this.initX, this.initY, 50, 50);
					}
				} 
				else{
				//draws and animates the left shark
					if(this.sharkFrame == 0){
						ctx.drawImage(this.image,this.x - halfW, this.y - halfH, this.width, this.height);
					}
					else if(this.sharkFrame == 1){
						ctx.drawImage(this.image4,this.x - halfW, this.y - halfH, this.width, this.height);
					}
					else if(this.sharkFrame ==2){
						ctx.drawImage(this.image6,this.x - halfW, this.y - halfH, this.width, this.height);
					}
					//Creates a warning sign on the left of the screen
					if(this.x < -500){
						ctx.drawImage(this.image3,this.initX, this.initY, 50, 50);
					}
				}
			}
			else{
		//Creates a shark coming from the right
				if(!this.image){
					this.initX = this.canvasWidth - 60;
					ctx.fillStyle = this.color;
					ctx.fillRect(this.x - halfW, this.y - halfH, this.width, this.height);
					if(this.x > this.canvasWidth + 500){
						ctx.fillStyle = "red";
						ctx.fillRect(this.initX, this.initY, 50, 50);
					}
				} 
				else{
					this.initX = this.canvasWidth - 60;//changes the spawn position of the shark to the right of the screen
				//draws and animates the right shark
				if(this.sharkFrame == 0){
					ctx.drawImage(this.image2,this.x - halfW, this.y - halfH, this.width, this.height);
					}
					else if(this.sharkFrame == 1){
						ctx.drawImage(this.image5,this.x - halfW, this.y - halfH, this.width, this.height);
					}
					else if(this.sharkFrame == 2){
						ctx.drawImage(this.image7,this.x - halfW, this.y - halfH, this.width, this.height);
					}
					//Creates a warning sign on the right of the screen
					if(this.x > this.canvasWidth + 500){
						ctx.drawImage(this.image3,this.initX, this.initY, 50, 50);
					}
					
				}
			
			}
	  };
	//Updates the shark's location if it's heading from the left
	p.update = function(dt) {
		this.x += this.xVelocity *dt;
		this.active = this.active && inBounds(this);	
	};
	//Updates the shark's location if it's heading from the right
	p.update2 = function(dt) {
		this.x += this.xVelocity2 *dt;
		this.active = this.active && inBounds(this);		
	};
	//Tells whether the sharks are in the screen or not
	function inBounds(obj) {
		return obj.y <= obj.canvasHeight + obj.height * 0.5;
	};
	
	return Shark;
	
}();
