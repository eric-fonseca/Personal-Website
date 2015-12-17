"use strict";

var app = app || {};

app.jks = {
	// CONSTANT properties
    WIDTH : 640, 
    HEIGHT: 480,
    canvas: undefined,
    ctx: undefined,
    fish: undefined, //Fish facing left frame 1
	fish2: undefined, //Fish facing right frame 1
	fish3: undefined, //Fish facing left frame 2
	fish4: undefined, //Fish facing right frame 2
	sharkImageR: undefined, //Shark facing left frame 1
	sharkImageL: undefined, //Shark facing right frame 1
	sharkImageR2: undefined, //Shark facing left frame 2
	sharkImageL2: undefined, //Shark facing right frame 2
	sharkImageR3: undefined, //Shark facing left frame 3
	sharkImageL3: undefined, //Shark facing right frame 3
	warningImage: undefined, //warning sign
	foodImage: undefined, //fish flakes
	backgroundImage: undefined, //background
	drawLib: undefined,
	dt: 1/60.0, //delta time
	app: undefined,
	FOOD_PROBABILITY_PER_SECOND: 0.4, //frequency of fish flakes appearing
	SHARK_PROBABILITY_PER_SECOND:0, //frequency of sharks appearing, start at zero and increase according to score
	food: [], //array of food
	sharks: [], //array of sharks
	score: 0, //player score
    dead: false,
    soundtrack: undefined,
	soundtrackPaused: false,
	clicked: true,
    
    // methods
	init : function(fish) {
		var self = this;
			// declare properties
			this.canvas = document.querySelector('canvas');
			this.canvas.width = this.WIDTH;
			this.canvas.height = this.HEIGHT;
			this.ctx = this.canvas.getContext('2d');
			 
			//Set up background music
			this.soundtrack = createjs.Sound.play("UW", {loop:-1, volume:0.4});
			
			// set up Images
			this.fish = fish;
			
			//Fish facing left frame 1
			var image = new Image();
			image.src = this.app.IMAGES['fishImage'];
			this.fish.image = image;
			
			//Fish facing right frame 1
			var image1 = new Image();
			image1.src = this.app.IMAGES['fishImage2'];
			this.fish.image2 = image1;
			
			//Shark facing right frame 1
			var image2 = new Image();
			image2.src = this.app.IMAGES['sharkImageL'];
			this.sharkImageL = image2;
			
			//Shark facing left frame 1
			var image3 = new Image();
			image3.src = this.app.IMAGES['sharkImageR'];
			this.sharkImageR = image3;
			
			//Warning sign
			var image4 = new Image();
			image4.src = this.app.IMAGES['warningImage'];
			this.warningImage = image4;
			
			//Fish flakes
			var image5 = new Image();
			image5.src = this.app.IMAGES['foodImage'];
			this.foodImage = image5;
			
			//Background image
			var image6 = new Image();
			image6.src = this.app.IMAGES['backgroundImage'];
			this.backgroundImage = image6;
			
			//Shark facing right frame 2
			var image7 = new Image();
			image7.src = this.app.IMAGES['sharkImageL2'];
			this.sharkImageL2 = image7;
			
			//Shark facing left frame 2
			var image8 = new Image();
			image8.src = this.app.IMAGES['sharkImageR2'];
			this.sharkImageR2 = image8;
			
			//Fish facing left mouth closed
			var image9 = new Image();
			image9.src = this.app.IMAGES['fishBite'];
			this.fish.image3 = image9;
			
			//Fish facing right mouth closed
			var image10 = new Image();
			image10.src = this.app.IMAGES['fishBite2'];
			this.fish.image4 = image10;
			
			//Shark facing left frame 3
			var image11 = new Image();
			image11.src = this.app.IMAGES['sharkImageR3'];
			this.sharkImageR3 = image11;
			
			//Shark facing right frame 3
			var image12 = new Image();
			image12.src = this.app.IMAGES['sharkImageL3'];
			this.sharkImageL3 = image12;
			
			//Fish facing left frame 2
			var image13 = new Image();
			image13.src = this.app.IMAGES['fishImage3'];
			this.fish.image5 = image13;
			
			//Fish facing right frame 2
			var image14 = new Image();
			image14.src = this.app.IMAGES['fishImage4'];
			this.fish.image6 = image14;
			
			//initialize fish and other sprites
			this.fish.init();
			this.moveSprites();
			this.startGame();
			
		//difficulty selector - change the difficulty each time the dropdown is changed
		document.querySelector('#difficultyChooser').onchange = function(e){
				//Easy mode - probability of sharks appearing caps at 0.2 per second (after 60 fish flakes eaten)
				if(e.target.value == "Easy"){ 
					if(self.SHARK_PROBABILITY_PER_SECOND<0.2){
						self.SHARK_PROBABILITY_PER_SECOND = self.score/300;
					}
					else{
						self.SHARK_PROBABILITY_PER_SECOND=0.2;
					}
				}
				//Medium mode - probability of sharks appearing caps at 0.35 per second (after 53 fish flakes eaten)
				else if(e.target.value == "Medium"){
					if(self.SHARK_PROBABILITY_PER_SECOND<0.35){
						self.SHARK_PROBABILITY_PER_SECOND = self.score/150;
					}
					else{
						self.SHARK_PROBABILITY_PER_SECOND=0.35;
					}
				}
				//Hard mode - probability of sharks appearing caps at 0.5 per second (after 38 fish flakes eaten)
				else if(e.target.value == "Hard"){
					if(self.SHARK_PROBABILITY_PER_SECOND<0.5){
						self.SHARK_PROBABILITY_PER_SECOND = self.score/75;
					}
					else{
						self.SHARK_PROBABILITY_PER_SECOND=0.5;
					}
				}
				//Intense mode - probability of sharks appearing STARTS at 0.5 per second and increases by 0.05 with each fish flake eaten (no cap)
				else if(e.target.value == "Intense"){
					if(self.SHARK_PROBABILITY_PER_SECOND<0.5){
						self.SHARK_PROBABILITY_PER_SECOND = 0.5;
					}
					else{
						self.SHARK_PROBABILITY_PER_SECOND += 0.05;
					}
				}
		}
			
	},
	
	update: function(){
		if(!this.dead){ //if you are still alive
			requestAnimationFrame(this.update.bind(this));
			this.moveSprites();
			this.drawSprites();
			this.checkForCollisions();
		}
		else{ //if you died
		if(window.localStorage.highScore < this.score){ 
			window.localStorage.highScore = this.score; //update the high score if you beat your record
		}
		this.gameOver(); //show the game over screen
		}
	},
	
    drawSprites: function(){
		this.drawLib.clear(this.ctx,0,0,this.WIDTH,this.HEIGHT);
		this.ctx.drawImage(this.backgroundImage, 0, 0, this.WIDTH, this.HEIGHT); //display the background image
		this.fish.draw(this.ctx); //display the fish
		
		app.drawLib.text(this.ctx, this.score, 10, 24, 20, '#FFFFFF'); //show the current score in the top left
		app.drawLib.highScore(this.ctx, window.localStorage.highScore, 630, 24, 20, '#FFFFFF'); //show the high score in the top right
		
		for(var i = 0; i<this.food.length; i++){
			this.food[i].draw(this.ctx); //display the food
		};
		
		for(var i = 0; i<this.sharks.length; i++){
			this.sharks[i].draw(this.ctx); //display the sharks
		};
	},
	
	moveSprites: function(){
		if(this.app.keydown[this.app.KEYBOARD.KEY_LEFT] || this.app.keydown[this.app.KEYBOARD.KEY_A]){
			this.fish.moveLeft(this.dt); //move left with the left arrow or A key
		}
		if(this.app.keydown[this.app.KEYBOARD.KEY_RIGHT] || this.app.keydown[this.app.KEYBOARD.KEY_D]){
			this.fish.moveRight(this.dt); //move right with the right arrow of D key
		}
		if(this.app.keydown[this.app.KEYBOARD.KEY_UP] || this.app.keydown[this.app.KEYBOARD.KEY_W]){
			this.fish.moveUp(this.dt); //move up with the up arrow or W key
		}
		if(this.app.keydown[this.app.KEYBOARD.KEY_DOWN] || this.app.keydown[this.app.KEYBOARD.KEY_S]){
			this.fish.moveDown(this.dt); //move down with the down arrow or S key
		}
		
		//Falling Fish Food
		for(var i = 0; i<this.food.length; i++){
			this.food[i].update(this.dt);
		};
		
		//Swimming Sharks
		for(var i = 0; i<this.sharks.length; i++){
			if(this.sharks[i].lShark){
			this.sharks[i].update(this.dt);
			}
			else{
			this.sharks[i].update2(this.dt);
			}
		};
		
		this.food = this.food.filter(function(chum) {
			return chum.active;
		});
		
		//randomly spawn fish flakes
		if(Math.random() < this.FOOD_PROBABILITY_PER_SECOND/60){
			this.food.push(new app.Food(this.foodImage, this.WIDTH, this.HEIGHT));
		}
		
		//randomly spawn sharks
		if(Math.random() < this.SHARK_PROBABILITY_PER_SECOND/60){
			this.sharks.push(new app.Shark(this.sharkImageL, this.sharkImageR, this.warningImage,this.sharkImageL2, this.sharkImageR2,this.sharkImageL3, this.sharkImageR3, this.WIDTH, this.HEIGHT));
			if(!this.soundtrackPaused){ //play a sound effect when a shark is spawned and the game isn't muted
				createjs.Sound.play("Jaws", {interrupt: createjs.Sound.INTERRUPT_EARLY, volume:0.3});
			}
		}
	},
	
	//check for collisions
	collides: function (a, b) {
		var ax = a.x - a.width/2;
		var ay = a.y - a.height/2;
		var bx = b.x - b.width/2;
		var by = b.y - b.height/2;
		
		return  ax < bx + b.width &&
				ax + a.width > bx &&
			   ay < by + b.height &&
				ay + a.height > by;
	},
	
	gameOver: function(){
		app.drawLib.clear(this.ctx,0,0,640,480); //clear the screen
		app.drawLib.overScreen(this.ctx, this.score, 320,220, 40 , '#CCCCCC'); //display your final score
		if(!this.soundtrackPaused){ //play the failure sound effect if the game isn't muted
			createjs.Sound.play("fail", {interrupt: createjs.Sound.INTERRUPT_EARLY, volume:0.2});
		}
	},
	
	startGame: function(){
		
		var self = this;
		this.drawLib.backgroundGradient(this.ctx,this.WIDTH,this.HEIGHT); //draw a blue background gradient
		if(window.localStorage.highScore == undefined){ 
			window.localStorage.highScore = 0; //if the game hasn't been played yet, set the highscore to 0
		}
		
		//set up instruction screen text
		this.ctx.font = '28px YanoneKaffeesatz';
		this.ctx.fillStyle = "white";
		this.ctx.textAlign = "center";
		this.ctx.fillText("Welcome to Just Keep Swimming!", 320, 120);
		this.ctx.fillText("Eat the falling fish flakes, but watch out for the sharks!", 320,190);
		this.ctx.fillText("Arrow keys/WASD - Movement         M - Mute sound", 320,230);
		this.ctx.fillText("The current Highscore is "+localStorage.highScore, 320,300);
		this.ctx.fillText("Click anywhere to begin the game!!", 320,370);
		this.ctx.fillText("Brendan Kenny", 71, 28);
		this.ctx.fillText("Eric Fonseca", 580, 28);

		//if the screen is clicked, start the game
		this.canvas.addEventListener('click', function(e){
                if(self.clicked){
                	self.update();
                	self.clicked = false;
                }  
            }, false);
            
	},
	
	checkForCollisions: function (){
		var self = this;
		var difficulty = document.querySelector('#difficultyChooser').value; //get a reference to the difficulty selector
		
		this.food.forEach(function(chum){
			if(self.collides(chum, self.fish)){ //if the fish collides with a fish flake
				chum.active = false; //remove fish flake
				self.fish.eatFood(); //increase size
				self.score++; //update current score
				
				//increase the probability of sharks appearing depending on the difficulty setting
				//Easy mode - probability of sharks appearing caps at 0.2 per second (after 60 fish flakes eaten)
				if(difficulty == "Easy"){
					if(self.SHARK_PROBABILITY_PER_SECOND<0.2){
						self.SHARK_PROBABILITY_PER_SECOND = self.score/300;
					}
					else{
						self.SHARK_PROBABILITY_PER_SECOND=0.2;
					}
				}
				//Medium mode - probability of sharks appearing caps at 0.35 per second (after 53 fish flakes eaten)
				else if(difficulty == "Medium"){
					if(self.SHARK_PROBABILITY_PER_SECOND<0.35){
						self.SHARK_PROBABILITY_PER_SECOND = self.score/150;
					}
					else{
						self.SHARK_PROBABILITY_PER_SECOND=0.35;
					}
				}
				//Hard mode - probability of sharks appearing caps at 0.5 per second (after 38 fish flakes eaten)
				else if(difficulty == "Hard"){
					if(self.SHARK_PROBABILITY_PER_SECOND<0.5){
						self.SHARK_PROBABILITY_PER_SECOND = self.score/75;
					}
					else{
						self.SHARK_PROBABILITY_PER_SECOND=0.5;
					}
				}
				//Intense mode - probability of sharks appearing STARTS at 0.5 per second and increases by 0.05 with each fish flake eaten (no cap)
				else if(difficulty == "Intense"){
					if(self.SHARK_PROBABILITY_PER_SECOND<0.5){
						self.SHARK_PROBABILITY_PER_SECOND = 0.5;
					}
					else{
						self.SHARK_PROBABILITY_PER_SECOND += 0.05;
					}
				}
				
				if(!self.soundtrackPaused){ //play a sound effect when you eat food if the music isn't muted
					createjs.Sound.play("chomp", {interrupt: createjs.Sound.INTERRUPT_EARLY, volume:0.2});
				}
			}
		});
		
		this.sharks.forEach(function(shark){
	
			if(self.collides(shark, self.fish)){ //if the fish collides with a shark
				self.fish.color ="rgba(255, 165, 0, 0.0)";
				self.dead = true;
				if(!self.soundtrackPaused){ //play a sound effect if the music isn't muted
					createjs.Sound.play("bite", {interrupt: createjs.Sound.INTERRUPT_EARLY, volume:0.3});
				}
			}
		});
		
		
	},
	
	resumeSoundtrack:function(){
    	this.soundtrack.resume(); //play the music
    },
    
    pauseSoundtrack:function(){
    	this.soundtrack.pause(); //pause the music
    },
    
    toggleSoundtrack:function(){
    	this.soundtrackPaused = !this.soundtrackPaused; //toggle between pausing and playing the music
    	if(this.soundtrackPaused){
    		this.pauseSoundtrack();
    	}
    	else{
    		this.resumeSoundtrack();
    	}
    }
    
    
};