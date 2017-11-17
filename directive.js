(function() {
  function hoverDirective() {
    return {
      // scope: {},
      restrict: "A",

      link: function($scope, $element, $attrs){
        $element.on("mouseenter", function() {
          $element.css("background-color", "#eeeeee");
        });
        $element.on("mouseleave", function() {
          $element.css("background-color", "white");
      });
      }
    };
  }


  angular
    .module("app")
    .directive("hoverDirective", hoverDirective);
})();
