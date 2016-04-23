var myApp = angular.module('wsApp', []);
myApp.controller('wsController', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
$scope.addImage = function() {
  console.log($scope.image);
  $http.post('/image',$scope.image).success(function(response) {
    console.log(response);
  });
};
}]);﻿