'use strict';

angular.module('myApp.view2', ['ngRoute' , 'pascalprecht.translate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'view2Ctrl'
  });
}])

.controller('view2Ctrl', [ '$scope', '$http', function($scope,hp) {
  hp.get('view2/employee.json')
  .success(function(data) {
    $scope.emp=data.emp;
    console.log($scope.emp);
  });
}]);
