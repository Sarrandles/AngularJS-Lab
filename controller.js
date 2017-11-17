(function() {
  function FormController() {
    var vm = this;

    vm.toDoList = ["Walk Syntax", "Cry about Angular", "Eat all the tacos", "Git Gud", "Find and delete misplaced semicolons", "Contemplate existence"];

    vm.addItem = function(addTask) {
      vm.toDoList.push(addTask);
      vm.addTask="";
    };

    vm.removeItem = function(index) {
      vm.toDoList.splice(index, 1);
    };
  }

  angular
    .module("app")
    .controller("FormController", FormController);

    //first parameter is name of our controller. the second parameter is the name of the function we want
    // to have access to... it's easier to keep the same name for both
})();
