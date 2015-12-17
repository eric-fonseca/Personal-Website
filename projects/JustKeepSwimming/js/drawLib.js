"use strict";

var app = app || {};

app.drawLib = {
	//Clears the screen
	clear: function(ctx, x, y, w, h){
		ctx.fillStyle = '#8A0707';
		ctx.fillRect(x, y, w, h);
	},
	//Creates a rectangle
	rect: function(ctx, x, y, w, h, col){
		ctx.save();
		ctx.fillStyle = col;
		ctx.fillRect(x, y, w, h);
		ctx.restore();
	},
	//draws a blue Gradient Background
	backgroundGradient: function(ctx, width, height){
		ctx.save();
		var grad=ctx.createLinearGradient(0,0,0,height);
		grad.addColorStop(0,'#0694FF'); //top
		grad.addColorStop(.5,"blue"); //top
		grad.addColorStop(.85,'#021E8B'); //top
		grad.addColorStop(1,'#020555'); //bottom
		ctx.fillStyle=grad;
		ctx.fillRect(0,0,width,height);
		ctx.restore();

	},
	//Prints the score to the screen
	text: function (ctx, string, x, y, size, col){
		ctx.save();
		ctx.font = 'bold ' + size + 'px YanoneKaffeesatz';
		ctx.textAlign = "left";
		ctx.fillStyle = col;
		ctx.fillText("Score: "+string, x,y);
		ctx.restore();
	},
	//Prints out the highscore to the screen
	highScore: function (ctx, string, x, y, size, col){
		ctx.save();
		ctx.font = 'bold ' + size + 'px YanoneKaffeesatz';
		ctx.textAlign = "right";
		ctx.fillStyle = col;
		ctx.fillText("High Score: "+string, x,y);
		ctx.restore();
	},
	//Creates the Game Over screen 
	overScreen: function (ctx, string, x, y, size, col){
		ctx.save();
		ctx.font = 'bold ' + size + 'px YanoneKaffeesatz';
		ctx.fillStyle = col;
		ctx.textAlign = "center";
		ctx.fillText("You were eaten!", x, y);
		ctx.fillText("Final Score: "+string, x, y+ 50);
		ctx.restore();
	}
};