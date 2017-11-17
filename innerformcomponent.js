(function(){
  var taskList= {
    controller: "FormController",
    templateUrl: "templates/list-form-template.html"
};

  angular
    .module("app")
    .component("taskList", taskList);

})();
