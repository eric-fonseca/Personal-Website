app.controller("MainController", ["$scope", function($scope){
  $scope.projects = [ 
  { 
  	id: "ecoCalc",
    preview: "img/previews/ecoCalcPrev.png", 
    image: "img/work/ecoCalc.png", 
    title: "Staples Eco-Office Calculator", 
    link: "http://www-staging.rit.edu/gis/ssil/calculator/",
    github: "None",
    tags: ["HTML", "SCSS", "JavaScript", "jQuery", "Gulp.js", "Bootstrap", "Illustrator"]
  }, 
  { 
  	id: "jks",
    preview: "img/previews/jksPrev.png", 
    image: "img/work/jks.png", 
    title: "Just Keep Swimming", 
    link: "projects/JustKeepSwimming/JKS.html",
    github: "https://github.com/eric-fonseca/Just-Keep-Swimming",
    tags: ["HTML", "CSS", "JavaScript", "Photoshop"]
  }, 
  { 
  	id: "flicker",
    preview: "img/previews/flickerPrev.png", 
    image: "img/work/flicker.png", 
    title: "Flicker", 
    link: "projects/Flicker/FlickerWebPlayer.html",
    github: "None",
    tags: ["C#", "Unity", "Photoshop"]
  }, 
  { 
  	id: "moneyTree",
    preview: "img/previews/moneyTreePrev.png", 
    image: "img/work/moneyTree.png", 
    title: "Money Tree", 
    link: "None",
    github: "https://github.com/eric-fonseca/Money-Tree",
    tags: ["Objective-C", "Xcode", "Photoshop"]
  }, 
  { 
  	id: "tapVsTap",
    preview: "img/previews/tapVsTapPrev.png", 
    image: "img/work/tapVsTap.png", 
    title: "Tap Vs Tap", 
    link: "None",
    github: "https://github.com/BKenny11/Tap-Vs-Tap",
    tags: ["Java", "Android Studio", "Photoshop"]
  }, 
  { 
  	id: "ritMaps",
    preview: "img/previews/ritMapsPrev.png", 
    image: "img/work/ritMaps.png", 
    title: "RIT Maps", 
    link: "None",
    github: "https://github.com/eric-fonseca/RIT-Maps",
    tags: ["Objective-C", "Xcode", "JSON"]
  }, 
  { 
  	id: "infoTunes",
    preview: "img/previews/infoTunesPrev.png", 
    image: "img/work/infoTunes.png", 
    title: "InfoTunes", 
    link: "None",
    github: "https://github.com/eric-fonseca/InfoTunes",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Photoshop", "Web API's"]
  }, 
  { 
  	id: "superstitions",
    preview: "img/previews/superstitionsPrev.png", 
    image: "None", 
    title: "Superstitions Animated Video", 
    link: "None",
    github: "None",
    tags: ["After Effects", "Photoshop", "Illustrator"]
  }, 
  { 
  	id: "guessSketch",
    preview: "img/previews/guessSketchPrev.png", 
    image: "img/work/guessSketch.png", 
    title: "Guess-A-Sketch", 
    link: "None",
    github: "https://github.com/eric-fonseca/Guess-A-Sketch",
    tags: ["HTML", "CSS", "Jade", "JavaScript", "jQuery", "Node.js", "Photoshop"]
  }
]
  
}]);