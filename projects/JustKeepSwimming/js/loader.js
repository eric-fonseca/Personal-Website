"use strict";

var app = app || {};
//Loads the keycodes
app.KEYBOARD = {
	"KEY_LEFT": 37,
	"KEY_UP": 38,
	"KEY_RIGHT": 39,
	"KEY_DOWN": 40,
	"KEY_W": 87,
	"KEY_A": 65,
	"KEY_S": 83,
	"KEY_D": 68,
};

app.keydown = [];
//Loads the Images used
app.IMAGES = {
	fishImage:"images/fishy.png",
	fishImage2:"images/fishy2.png",
	fishImage3:"images/fishy3.png",
	fishImage4:"images/fishy4.png",
	fishBite:"images/Bite.png",
	fishBite2:"images/Bite2.png",
	warningImage: "images/warning.png",
	sharkImageL: "images/shark.png",
	sharkImageR: "images/shark2.png",
	sharkImageR2: "images/shark_updated2.png",
	sharkImageR3: "images/shark_updated3.png",
	sharkImageL2: "images/shark_updated.png",
	sharkImageL3: "images/shark_updated4.png",
	foodImage: "images/food.png",
	backgroundImage: "images/background.jpg"
};

window.onload = function(){
	//initializes the drawLibs
	app.fish.drawLib = app.drawLib;
	app.jks.drawLib = app.drawLib;
	app.jks.app = app;
	app.jks.init(app.fish);
	
//Tells whether there is a key currently pressed	
window.addEventListener("keydown",function(e){
	app.keydown[e.keyCode] = true;
});

//Tells when a pressed key is let up
window.addEventListener("keyup",function(e){
	app.keydown[e.keyCode] = false;
	if(e.keyCode == 77) app.jks.toggleSoundtrack();
});

//Queues the sounds and images to load
	app.queue = new createjs.LoadQueue(false);
	app.queue.installPlugin(createjs.Sound);
	app.queue.on("complete", function(){
	app.jks.init(app.fish);
	});
	
//Loads in all of the images and sounds, and assigns ID's to them all
	app.queue.loadManifest([
		{id: "fishImage", src:"images/fishy.png"},
		{id: "fishImage2", src:"images/fishy2.png"},
		{id: "fishImage3", src:"images/fishy3.png"},
		{id: "fishImage4", src:"images/fishy4.png"},
		{id: "fishBite", src:"images/Bite.png"},
		{id: "fishBite2", src:"images/Bite2.png"},
		{id: "sharkImageL", src:"images/shark.png"},
		{id: "sharkImageR", src:"images/shark2.png"},
		{id: "sharkImageL2", src:"images/shark_updated.png"},
		{id: "sharkImageR2", src:"images/shark_updated2.png"},
		{id: "sharkImageL3", src:"images/shark_updated4.png"},
		{id: "sharkImageR3", src:"images/shark_updated3.png"},
		{id: "warningImage", src:"images/warning.png"},
		{id: "foodImage", src:"images/food.png"},
		{id: "backgroundImage", src:"images/background.jpg"},
	
		{id: "UW", src:"sounds/UW.mp3"},
		{id:"Jaws", src:"sounds/jaws.mp3"},
		{id:"bite", src:"sounds/bite.wav"},
		{id:"chomp", src:"sounds/chomp.wav"},
		{id:"fail", src:"sounds/fail.mp3"},
	]);

}
	
