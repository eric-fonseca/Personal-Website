app.directive("projectInfo", function(){
  return {
    restrict: "E",
    scope: {
      info: "="
    },
    templateUrl: "js/directives/projectInfo.html"
  };
});