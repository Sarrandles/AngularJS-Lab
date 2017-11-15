(function() {
  function FormController() {
    var vm = this;
    vm.toDoList = ["Walk Syntax", "Do the laundry", "Eat all the tacos", "Git Gud", "Buy milk", "Bake a pie"];

    vm.addItem = function(index) {
      vm.toDoList.push(index);
    };
    vm.removeItem = function(index) {
      vm.toDoList.splice(index, 1);
    };
  }

  angular
    .module("moduleApp")
    .controller("FormController", FormController);
})();
