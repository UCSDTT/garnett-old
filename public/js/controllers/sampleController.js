'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http, $window) {
    $scope.logout = function (){
      console.log("enter logout from front end");
      $window.location.href = '/logout';
    };

    $scope.sayHello = function() {
      $scope.greeting = "Hello World";
    };
  }).
  controller('MyCtrl1', function ($scope, $window) {
    // write Ctrl here
    console.log("in view 1");
  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here
    console.log("enter controller 2");
  }).
  controller('EventsCtrl', function ($scope) {
    // write Ctrl here
    console.log("enter EventsCtrl");
  });