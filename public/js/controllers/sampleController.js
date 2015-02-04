'use strict';

/* Controllers */

var app = angular.module('myApp.controllers', []);

  app.controller('AppCtrl', function ($scope, $http, $window) {
      $scope.logout = function (){
      console.log("enter logout from front end");
      $window.location.href = '/logout';
    };

    $scope.sayHello = function() {
      $scope.greeting = "Hello World";
    };
  });
  
  app.controller('MyCtrl1', function ($scope, $window) {
    // write Ctrl here
    console.log("in view 1");
  });
  
  app.controller('MyCtrl2', function ($scope) {
    // write Ctrl here
    console.log("enter controller 2");
  });
  
  app.controller('EventsCtrl', function ($scope) {
    // write Ctrl here
    console.log("enter EventsCtrl");
  });