'use strict';

/* Controllers */
/*
function PhoneListCtrl($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}*/

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';

}]);

//PhoneListCtrl.$inject = ['$scope', '$http'];
  // And this controller definition

function MyController($scope, greeter,chien) {
  $scope.sayHello = function() {
    greeter.greet('Hello World');
  };
  $scope.aboyer = function(){
	chien.aboie();
  }
}

