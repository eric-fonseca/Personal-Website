app.controller("MainController", ["$scope", function($scope){
  $scope.projects = [ 
  { 
  	id: "ecoCalc",
    preview: "img/previews/ecoCalcPrev.png", 
    image: "img/work/ecoCalc.png", 
    title: "Staples Eco-Office Calculator", 
    objective: "Create a web application suitable to run on multiple platforms that provides a user with the environmental footprint for their office cubicle, based on the user’s selection of products, product usage information, and other data.",
    description: "This is a currently ongoing project that I am working on with the Golisano Institute of Sustainability and Staples. I am the lead developer in a small team with one other developer and a designer.",
    link: "http://www-staging.rit.edu/gis/ssil/calculator/",
    github: "None",
    tags: ["HTML", "SCSS", "JavaScript", "jQuery", "Gulp.js", "Bootstrap", "Illustrator"]
  }, 
  { 
  	id: "jks",
    preview: "img/previews/jksPrev.png", 
    image: "img/work/jks.png", 
    title: "Just Keep Swimming", 
    objective: "Create a significant HTML5 media experience or digital game that is aesthetically pleasing and highly interactive.",
    description: "For this project I worked with a partner to create a game using HTML canvas. The player controls a small fish and must eat fish food to grow bigger. As they eat more food, sharks begin to appear and the player must avoid them in order to survive. This becomes increasingly harder as you get bigger and the frequency of the sharks increase.",
    link: "projects/JustKeepSwimming/JKS.html",
    github: "https://github.com/eric-fonseca/Just-Keep-Swimming",
    tags: ["HTML", "CSS", "JavaScript", "Photoshop"]
  }, 
  { 
  	id: "flicker",
    preview: "img/previews/flickerPrev.png", 
    image: "img/work/flicker.png", 
    title: "Flicker", 
    objective: "Pitch a short game idea proposal for possible implementation by the class. At the end, the class will vote on which ideas to adopt for development and divide into groups to work on each game.",
    description: "For this project I lead a team of 5 to create a top down maze game in Unity. My idea was to create a game where the entire maze is pitch black and you control a firefly that illuminates the area around it. The objective is to simply reach the end of the maze while avoiding the monsters and other hazards within.",
    link: "projects/Flicker/FlickerWebPlayer.html",
    github: "None",
    tags: ["C#", "Unity", "Photoshop"]
  }, 
  { 
  	id: "moneyTree",
    preview: "img/previews/moneyTreePrev.png", 
    image: "img/work/moneyTree.png", 
    title: "Money Tree", 
    objective: 'Create a useful or entertaining iOS app or game. The app should be "App Store ready" (or nearly so). The target hardware can be iPhone or iPad (or Universal).',
    description: 'For this project I chose to make a "cookie clicker" clone. The idea is that users can grow money trees in a garden and harvest them for cash. As you earn more money, you can choose to upgrade your tree or hire workers that will automatically harvest cash from your tree for you.',
    link: "None",
    github: "https://github.com/eric-fonseca/Money-Tree",
    tags: ["Objective-C", "Xcode", "Photoshop"]
  }, 
  { 
  	id: "tapVsTap",
    preview: "img/previews/tapVsTapPrev.png", 
    image: "img/work/tapVsTap.png", 
    title: "Tap Vs Tap", 
    objective: "Create a useful or entertaining Android app or game in teams of 2 to 3 students. The target hardware can be Phone, Tablet, or both. The app/game needs to be appropriate for all audiences.",
    description: "For this project I worked with a partner to create a two player game for Android tablets. The game is similar to a combination of Guitar Hero and Simon Says. Each player takes turns creating patterns for the opponent to replicate and players lose health by tapping incorrectly. The game also offers customization and powerups in order to make things interesting.",
    link: "None",
    github: "https://github.com/BKenny11/Tap-Vs-Tap",
    tags: ["Java", "Android Studio", "Photoshop"]
  }, 
  { 
  	id: "ritMaps",
    preview: "img/previews/ritMapsPrev.png", 
    image: "img/work/ritMaps.png", 
    title: "RIT Maps", 
    objective: "Create a mapping application that displays RIT buildings and relevant locations to prospective students and their parents.",
    description: "For this project I created an RIT maps app for iPads. I used a JSON file to place markers on all the buildings across the campus to display information. Users could search for a specific building in a list and the map would center on that location.",
    link: "None",
    github: "https://github.com/eric-fonseca/RIT-Maps",
    tags: ["Objective-C", "Xcode", "JSON"]
  }, 
  { 
  	id: "infoTunes",
    preview: "img/previews/infoTunesPrev.png", 
    image: "img/work/infoTunes.png", 
    title: "InfoTunes", 
    objective: "Create a useful and visually-rich HTML5 application that mashes up 2 or more web services (XML or JSON-based), and showcases mastery of modern web technologies.",
    description: "For this project I worked with a partner to create a website that mixed multiple web services in order to provide users with a platform to pull information about a particular artist and song. We combined three different API's to retrieve information including song lyrics, artist bios, and music videos.",
    link: "None",
    github: "https://github.com/eric-fonseca/InfoTunes",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Photoshop", "Web API's"]
  }, 
  { 
  	id: "superstitions",
    preview: "img/previews/superstitionsPrev.png", 
    image: "img/work/superstitions.png", 
    title: "Superstitions Animated Video", 
    objective: "Study a cultural group or examine cross-culturally a particular cultural aspect of your own interest. Use a creative or unique medium to present your findings to the class (i.e. original films or video games, poetry, story boards, photo essays, textiles, demonstrations, skits, etc.)",
    description: "For this project I wanted to improve my skills with Adobe After Effects so I decided to create a video using this software in order to present my topic to the class. This was particularly challenging for me because I had only used After Effects one time previously. I went a little overboard with effects, but overall I think it turned out nicely.",
    link: "https://drive.google.com/file/d/0BwYcAiq3YNSAZDFMY0E1dFlZTVk/view?usp=sharing",
    github: "None",
    tags: ["After Effects", "Photoshop", "Illustrator"]
  }, 
  { 
  	id: "guessSketch",
    preview: "img/previews/guessSketchPrev.png", 
    image: "img/work/guessSketch.png", 
    title: "Guess-A-Sketch", 
    objective: "Create a multi-user rich media web application utilizing UDP, TCP, WebSockets, or HTTP protocols.",
    description: "This is a multiplayer game that I developed independently where users draw preselected words and the other players have to guess what it is. Each person starts with their own word and the other players can write down their guesses as they are drawing on the screen. Each player has 90 seconds to a draw their picture and have someone guess it correctly.",
    link: "None",
    github: "https://github.com/eric-fonseca/Guess-A-Sketch",
    tags: ["HTML", "CSS", "Jade", "JavaScript", "jQuery", "Node.js", "Photoshop"]
  }
]
  
}]);