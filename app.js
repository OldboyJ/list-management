var app = angular.module('listApp', []);

app.component('listForm', {
  template: `
    <form ng-submit="vm.addItems()">
      <p>
        <label for="name">Name</label>
        <input id="name" ng-model="vm.newItem.name">
      </p>
      <p>
        <label for="quantity">Quantity</label>
        <input id="quantity" ng-model="vm.newItem.quantity">
      </p>
      <p>
        <button type="submit">Add Item</button>
      </p>
    </form>

    <div class="item">
      <ul>
        <li ng-repeat="item in vm.items">
          <p>Product:{{item.name}}</p>
          <p>Quantity:{{item.quantity}}</p>
          <a href="#" ng-click="vm.deleteItem($index)">Delete</a>
        </li>
      </ul>
    </div>
    `,
  controller: function() {
    var vm = this;

    vm.items = [];

    vm.addItems = function() {
      vm.items.push(vm.newItem);
      console.log(vm.newItem);
      vm.newItem = {};
    }
    vm.deleteItem = function(index) {
      vm.items.splice(index, 1);
    }
  },
  controllerAs: 'vm'
})
