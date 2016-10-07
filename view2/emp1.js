'use strict';

angular.module('myApp.view1', ['ngRoute','pascalprecht.translate'])

.config(['$routeProvider','$translateProvider' , function($routeProvider,$translateProvider) {
  $routeProvider.when('/emp1/:id', {
    templateUrl: 'view2/details.html',
    controller: 'View3Ctrl'
  });
  $translateProvider.useStaticFilesLoader( {
    prefix: 'view2/',
    suffix: '.json'
  });

  // $translateProvider.useStaticFilesLoader(fileNameConvention);
  $translateProvider.preferredLanguage('eng');
}])

.controller('View3Ctrl', [ '$scope', '$http','$routeParams','$translate', function($scope,hp,rp,$translate) {
  hp.get('view2/emp.json').success(function(data) {
    console.log(rp.id);
        $scope.det=data.det[rp.id-101];
  })
  $scope.language=function(lan){
    $translate.use(lan);
  }
}])
