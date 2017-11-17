(function() {
  function iconHoverDirective() {
    return {
      // scope: {},
      restrict: "A",

      link: function($scope, $element, $attrs){
        $element.on("mouseenter", function() {
          $element.css("color", "red");
        });
        $element.on("mouseleave", function() {
          $element.css("color", "black");
      });
      }
    };
  }


  angular
    .module("app")
    .directive("iconHoverDirective", iconHoverDirective);
})();
