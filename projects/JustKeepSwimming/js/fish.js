"use strict";

var app = app || {};

app.fish = {
	//Variables
	color: "rgba(255, 165, 0, 1.0)",
	x: 480,
	y: 360,
	width: 48,
	height: 30,
	speed: 350,
	image: undefined, 
	image2: undefined, 
	image3: undefined,
	image4: undefined,
	image5: undefined,
	image6: undefined,
	drawLib: undefined,
	isMovingLeft: true,
	mouthOpen:undefined,
	frameDelay: 0,
	rotation:0,
	flipper:undefined,
	swimDelay:0,
	//initializes the starting position for the fish animations
	init: function(){
		this.mouthOpen = true;
		this.flipper = true;
	},
	//creates the fish
	draw: function(ctx){
		var halfW = this.width/2;
		var halfH = this.height/2;
		var sourceX = 28;
		var sourceY = 2;
		var sourceWidth = 17;
		var sourceHeight = 21;
		var destX = this.x - halfW;
		var destY = this.y - halfH;
		var destWidth = 34;
		var destHeight = 42;
		//Tells which fram the fish is on in its animation
		if(this.swimDelay <= 10){
						this.flipper = true;
						this.swimDelay++;
		}else{
						this.flipper = false;
						this.swimDelay++;
		}	
		
		if(this.swimDelay >=20){
						this.swimDelay = 0;
						
		}
		
		//Draws the fish
		if(!this.image){
			this.drawLib.rect(ctx, this.x - halfW, this.y - halfH, this.width, this.height, this.color);
			
		}else{
		//animates the fish facing left
			if(this.isMovingLeft){
				if(this.mouthOpen){
					ctx.save();
					ctx.translate(this.x ,this.y);
					ctx.rotate(this.rotation);
					if(this.flipper){
					ctx.drawImage(this.image,0 - halfW, 0 - halfW, this.width, this.height);
					}else{
					ctx.drawImage(this.image5,0 - halfW, 0 - halfW, this.width, this.height);
					}
					ctx.restore();
					}else{
					ctx.save();
					ctx.translate(this.x ,this.y);
					ctx.rotate(this.rotation);
					ctx.drawImage(this.image3,0 - halfW, 0 - halfW, this.width, this.height);
					ctx.restore();
					
					if(this.frameDelay > 10){
						this.mouthOpen = true;
						this.frameDelay = 0;
					}else{
						this.frameDelay++;
					}
					}
			}else{
			//animates the fish facing Right
					if(this.mouthOpen){
					ctx.save();
					ctx.translate(this.x ,this.y);
					ctx.rotate(this.rotation);
					
					if(this.flipper){
					ctx.drawImage(this.image2,0 - halfW, 0 - halfW, this.width, this.height);
					}else{
					ctx.drawImage(this.image6,0 - halfW, 0 - halfW, this.width, this.height);
					}
					ctx.restore();
				}else{
					ctx.save();
					ctx.translate(this.x ,this.y);
					ctx.rotate(this.rotation);
					ctx.drawImage(this.image4,0 - halfW, 0 - halfW, this.width, this.height);
					ctx.restore();
					if(this.frameDelay > 10){
						this.mouthOpen = true;
						this.frameDelay = 0;
					}else{
						this.frameDelay++;
					}
				}
			
			}
		}
		this.rotation = 0;
	},
	//moves the fish to the left
	moveLeft: function(dt){
		this.x -= this.speed * dt;
		if(this.x<0-this.width/2){
			this.x=app.jks.WIDTH+this.width/2;
		}
		this.isMovingLeft = true;
	},
	//moves the fish to the right
	moveRight: function(dt){
		this.x += this.speed * dt;
		if(this.x>app.jks.WIDTH+this.width/2){
			this.x=0-this.width/2;
		}
		this.isMovingLeft = false;
	},
	//rotates the fish upwards, and moves it upwards
	moveUp: function(dt){
		this.y -= this.speed * dt;
		
		if(this.isMovingLeft){
			this.rotation = .35;
		}else{
			this.rotation = -.35;
		}
		
		
		if(this.y<0+this.height/1.25){
			this.y=0+this.height/1.25;
		}	
	},
	//rotates the fish downward, and moves it downward
	moveDown: function(dt){
		this.y += this.speed * dt;
		
		if(this.isMovingLeft){
			this.rotation = -.35;
		}else{
			this.rotation = .35;
		}
		
		if(this.y>app.jks.HEIGHT-this.height/5){
			this.y=app.jks.HEIGHT-this.height/5;
		}
	},
	//Fish changes when it eats some food
	eatFood:function(){
		this.height += 1.5;
		this.width += 2.4;
		this.mouthOpen = false;
	},
}; 