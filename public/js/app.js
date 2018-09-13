// See LICENSE.MD for license information.

var app = angular.module('MEANapp', ['ngRoute', 'ngStorage']);


/*********************************
 Controllers
 *********************************/

app.controller('HeaderController', function($scope, $localStorage, $sessionStorage, $location, $http){

    // Set local scope to persisted user data
    $scope.user = $localStorage;
    // console.log("scope");
    // console.log($scope);

});

app.controller('StatsController', function($scope, $location, $http){

  $http({
    method: 'GET',
    url: '/stats',
        data: {
          'incident_id': $scope.id,
          //grab incident data from db
            }
        })
});

app.controller('MapController', function($scope, $location, $http){

  $http({
      method: 'GET',
      url: '/map'
  })
      .success(function(response){
          $scope.message = response;
      })
      .error(function(response){
          alert(response);
          $location.path('/');
      }
  );

});

/*********************************
 Routing
 *********************************/
app.config(function($routeProvider) {
    'use strict';

    $routeProvider.

      //Root
      when('/', {
        templateUrl: 'index.html',
        controller: 'HomeController'
      }).

      //get project based on id
      when('/stats/:id', {
          templateUrl: 'views/stats.html',
          controller: 'StatsController'
      }).

      when('/map', {
          templateUrl: 'views/map.html',
          controller: 'MapController'
      }).
});
