(function(){
  var taskForm= {
    controller: "FormController",
    templateUrl: "templates/main-form-template.html"
};

  angular
    .module("app")
    .component("taskForm", taskForm);

})();
